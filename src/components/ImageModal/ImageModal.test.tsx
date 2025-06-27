import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import ImageModal from './ImageModal'
import { COLORS } from '../../constants/colors'

describe('ImageModal', () => {
  const mockProps = {
    isOpen: true,
    imageName: COLORS.RED,
    onClose: vi.fn()
  }

  it('renders modal when isOpen is true', () => {
    render(<ImageModal {...mockProps} />)
    
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/red.png')
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'red food items expanded')
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('does not render modal when isOpen is false', () => {
    render(<ImageModal {...mockProps} isOpen={false} />)
    
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<ImageModal {...mockProps} />)
    
    const closeButton = screen.getByRole('button')
    await user.click(closeButton)
    
    expect(mockProps.onClose).toHaveBeenCalled()
  })

  it('calls onClose when overlay is clicked', async () => {
    const user = userEvent.setup()
    const onCloseMock = vi.fn()
    render(<ImageModal {...mockProps} onClose={onCloseMock} />)
    
    const overlay = screen.getByTestId('modal-overlay')
    await user.click(overlay)
    
    expect(onCloseMock).toHaveBeenCalled()
  })

  it('has proper accessibility attributes', () => {
    render(<ImageModal {...mockProps} />)
    
    const closeButton = screen.getByRole('button')
    expect(closeButton).toHaveAttribute('aria-label', 'Close image modal')
    expect(closeButton).toHaveAttribute('type', 'button')
  })
}) 