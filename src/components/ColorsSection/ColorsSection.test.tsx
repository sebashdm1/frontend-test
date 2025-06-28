import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import ColorsSection from './ColorsSection'
import type { ColorsSectionContent } from '../../types'
import { COLORS } from '../../constants/colors'

describe('ColorsSection', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const mockCMSContent: ColorsSectionContent = {
    title: 'Custom CMS Colors Title',
    cards: [
      {
        id: COLORS.RED,
        title: 'Custom Red Title',
        description: 'This is a custom red description from CMS that can be much longer than the original.',
        imagePath: '/images/red.png'
      },
      {
        id: COLORS.GREEN,
        title: 'Custom Green Title',
        description: 'Custom green description.',
        imagePath: '/images/green.png'
      }
    ]
  }

  it('renders with default content when no CMS content provided', () => {
    render(<ColorsSection />)
    
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('TASTE THE COLOURS')
    expect(screen.getByText('RED')).toBeInTheDocument()
    expect(screen.getByText('Green')).toBeInTheDocument()
    expect(screen.getByText('White')).toBeInTheDocument()
    expect(screen.getByText(/Red foods remind us of berries/)).toBeInTheDocument()
  })

  it('renders with CMS content when provided', () => {
    render(<ColorsSection content={mockCMSContent} />)
    
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Custom CMS Colors Title')
    expect(screen.getByText('Custom Red Title')).toBeInTheDocument()
    expect(screen.getByText('Custom Green Title')).toBeInTheDocument()
    expect(screen.getByText('This is a custom red description from CMS that can be much longer than the original.')).toBeInTheDocument()
    expect(screen.queryByText('White')).not.toBeInTheDocument()
  })

  it('renders correct number of cards from CMS', () => {
    render(<ColorsSection content={mockCMSContent} />)
    
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(2)
  })

  it('opens modal when card image is clicked', async () => {
    const user = userEvent.setup()
    render(<ColorsSection />)
    
    const firstButton = screen.getAllByRole('button')[0]
    await user.click(firstButton)
    
    expect(screen.getByRole('img', { name: 'red food items expanded' })).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    const { container } = render(<ColorsSection />)
    
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('itemScope')
    expect(section).toHaveAttribute('itemType', 'http://schema.org/ItemList')
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveAttribute('itemProp', 'name')
    
    const cardList = screen.getByRole('list')
    expect(cardList).toHaveAttribute('itemProp', 'itemListElement')
  })

  it('handles very long CMS content gracefully', () => {
    const longContent: ColorsSectionContent = {
      title: 'This is a very long title that might wrap to multiple lines and should handle text overflow gracefully without breaking the layout',
      cards: [
        {
          id: COLORS.RED,
          title: 'Very Long Card Title That Spans Multiple Lines',
          description: 'This is an extremely long card description that simulates CMS content which could be much longer than the original design anticipated. It should wrap properly and not break the layout. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imagePath: '/images/red.png'
        }
      ]
    }

    render(<ColorsSection content={longContent} />)
    
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByText('Very Long Card Title That Spans Multiple Lines')).toBeInTheDocument()
    expect(screen.getByText(/This is an extremely long card description/)).toBeInTheDocument()
  })

  it('handles empty cards array gracefully', () => {
    const emptyContent: ColorsSectionContent = {
      title: 'Empty Section',
      cards: []
    }

    render(<ColorsSection content={emptyContent} />)
    
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Empty Section')
    expect(screen.queryByRole('article')).not.toBeInTheDocument()
  })

  it('handles single card gracefully', () => {
    const singleCardContent: ColorsSectionContent = {
      title: 'Single Card Section',
      cards: [
        {
          id: COLORS.RED,
          title: 'Only Red',
          description: 'Just one red card.',
          imagePath: '/images/red.png'
        }
      ]
    }

    render(<ColorsSection content={singleCardContent} />)
    
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Single Card Section')
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(1)
    expect(screen.getByText('Only Red')).toBeInTheDocument()
  })
}) 