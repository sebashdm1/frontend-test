import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import CookingContent from './CookingContent'

describe('CookingContent', () => {
  const mockOnAnchorClick = vi.fn()
  const defaultProps = {
    className: 'test-class',
    onAnchorClick: mockOnAnchorClick
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders article with correct content', () => {
    render(<CookingContent {...defaultProps} />)
    
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByRole('article')).toHaveClass('content-section', 'test-class')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('WHAT DOES COOKING MEAN?')
    expect(screen.getByText(/Is it simply applying heat/)).toBeInTheDocument()
  })

  it('renders aside section with call-out content', () => {
    render(<CookingContent {...defaultProps} />)
    
    const aside = screen.getByRole('complementary')
    expect(aside).toBeInTheDocument()
    expect(aside).toHaveClass('call-out')
    
    const perfectEggLink = screen.getByRole('link', { name: 'THE PERFECT EGG' })
    expect(perfectEggLink).toBeInTheDocument()
    expect(perfectEggLink).toHaveAttribute('href', '#perfect-egg')
    
    expect(screen.getByText('Keep water between 67 and 68°C for a flavourful, tender yolk')).toBeInTheDocument()
  })

  it('calls onAnchorClick when perfect egg link is clicked', async () => {
    const user = userEvent.setup()
    render(<CookingContent {...defaultProps} />)
    
    const perfectEggLink = screen.getByRole('link', { name: 'THE PERFECT EGG' })
    await user.click(perfectEggLink)
    
    expect(mockOnAnchorClick).toHaveBeenCalledWith('THE PERFECT EGG', '#perfect-egg')
  })

  it('has proper semantic structure', () => {
    render(<CookingContent {...defaultProps} />)
    
    const article = screen.getByRole('article')
    expect(article).toHaveAttribute('itemScope')
    expect(article).toHaveAttribute('itemType', 'http://schema.org/Article')
    
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('article-header')
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveAttribute('itemProp', 'headline')
    
    const bodyDiv = screen.getByText(/Is it simply applying heat/).closest('.article-body')
    expect(bodyDiv).toHaveAttribute('itemProp', 'articleBody')
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('itemProp', 'relatedLink')
  })

  it('applies default className when none provided', () => {
    render(<CookingContent onAnchorClick={mockOnAnchorClick} />)
    
    expect(screen.getByRole('article')).toHaveClass('content-section')
  })
}) 