import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import CookingContent from './CookingContent'
import type { CookingContent as CookingContentType } from '../../types'

describe('CookingContent', () => {
  const mockOnAnchorClick = vi.fn()
  const defaultProps = {
    className: 'test-class',
    onAnchorClick: mockOnAnchorClick
  }

  const mockCMSContent: CookingContentType = {
    headline: 'Custom CMS Headline',
    mainText: 'This is a custom CMS text that can be much longer or shorter than the default content.',
    callOut: {
      title: 'CUSTOM CALL OUT',
      description: 'Custom call out description from CMS'
    }
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders article with default content when no CMS content provided', () => {
    render(<CookingContent {...defaultProps} />)
    
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByRole('article')).toHaveClass('content-section', 'test-class')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('WHAT DOES COOKING MEAN?')
    expect(screen.getByText(/Is it simply applying heat/)).toBeInTheDocument()
  })

  it('renders article with CMS content when provided', () => {
    render(<CookingContent {...defaultProps} content={mockCMSContent} />)
    
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Custom CMS Headline')
    expect(screen.getByText('This is a custom CMS text that can be much longer or shorter than the default content.')).toBeInTheDocument()
    expect(screen.getByText('CUSTOM CALL OUT')).toBeInTheDocument()
    expect(screen.getByText('Custom call out description from CMS')).toBeInTheDocument()
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

  it('calls onAnchorClick when link is clicked with default content', async () => {
    const user = userEvent.setup()
    render(<CookingContent {...defaultProps} />)
    
    const perfectEggLink = screen.getByRole('link', { name: 'THE PERFECT EGG' })
    await user.click(perfectEggLink)
    
    expect(mockOnAnchorClick).toHaveBeenCalledWith('THE PERFECT EGG', '#perfect-egg')
  })

  it('calls onAnchorClick when link is clicked with CMS content', async () => {
    const user = userEvent.setup()
    render(<CookingContent {...defaultProps} content={mockCMSContent} />)
    
    const customLink = screen.getByRole('link', { name: 'CUSTOM CALL OUT' })
    await user.click(customLink)
    
    expect(mockOnAnchorClick).toHaveBeenCalledWith('CUSTOM CALL OUT', '#perfect-egg')
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

  it('handles very long CMS content gracefully', () => {
    const longContent: CookingContentType = {
      headline: 'This is a very long headline that might wrap to multiple lines and should handle text overflow gracefully',
      mainText: 'This is an extremely long main text that simulates CMS content which could be much longer than the original design anticipated. It should wrap properly and not break the layout. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      callOut: {
        title: 'VERY LONG CALL OUT TITLE THAT SPANS MULTIPLE LINES',
        description: 'This is a long call out description that might also span multiple lines and should be handled gracefully by the layout without breaking the design.'
      }
    }

    render(<CookingContent {...defaultProps} content={longContent} />)
    
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByText(/This is an extremely long main text/)).toBeInTheDocument()
  })
}) 