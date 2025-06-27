import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import ColorCard from './ColorCard'
import { COLORS } from '../../constants/colors'

describe('ColorCard', () => {
  const mockProps = {
    id: COLORS.RED,
    imagePath: '/images/red.png',
    title: 'RED',
    description: 'Red foods remind us of berries',
    onImageClick: vi.fn()
  }

  it('renders card with correct content', () => {
    render(<ColorCard {...mockProps} />)
    
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByText('RED')).toBeInTheDocument()
    expect(screen.getByText('Red foods remind us of berries')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/red.png')
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'RED color category')
  })

  it('calls onImageClick when button is clicked', async () => {
    const user = userEvent.setup()
    render(<ColorCard {...mockProps} />)
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(mockProps.onImageClick).toHaveBeenCalledWith(COLORS.RED)
  })

  it('has proper accessibility attributes', () => {
    render(<ColorCard {...mockProps} />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'View RED color category in detail')
    expect(button).toHaveAttribute('type', 'button')
  })
}) 