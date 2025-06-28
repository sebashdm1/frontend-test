import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useImageModal } from './useImageModal'
import { COLORS } from '../constants/colors'

describe('useImageModal', () => {
  it('should initialize with modal closed and default image', () => {
    const { result } = renderHook(() => useImageModal())
    
    expect(result.current.isModalOpen).toBe(false)
    expect(result.current.selectedImage).toBe(COLORS.RED)
  })

  it('should open modal with selected image', () => {
    const { result } = renderHook(() => useImageModal())
    
    act(() => {
      result.current.openModal(COLORS.GREEN)
    })
    
    expect(result.current.isModalOpen).toBe(true)
    expect(result.current.selectedImage).toBe(COLORS.GREEN)
  })

  it('should close modal while keeping selected image', () => {
    const { result } = renderHook(() => useImageModal())
    
    act(() => {
      result.current.openModal(COLORS.WHITE)
    })
    
    expect(result.current.isModalOpen).toBe(true)
    expect(result.current.selectedImage).toBe(COLORS.WHITE)
    
    act(() => {
      result.current.closeModal()
    })
    
    expect(result.current.isModalOpen).toBe(false)
    expect(result.current.selectedImage).toBe(COLORS.WHITE)
  })

  it('should handle multiple open/close cycles', () => {
    const { result } = renderHook(() => useImageModal())
    
    act(() => {
      result.current.openModal(COLORS.RED)
    })
    expect(result.current.isModalOpen).toBe(true)
    
    act(() => {
      result.current.closeModal()
    })
    expect(result.current.isModalOpen).toBe(false)
    
    act(() => {
      result.current.openModal(COLORS.GREEN)
    })
    expect(result.current.isModalOpen).toBe(true)
    expect(result.current.selectedImage).toBe(COLORS.GREEN)
  })

  it('should handle opening modal when already open with different image', () => {
    const { result } = renderHook(() => useImageModal())
    
    act(() => {
      result.current.openModal(COLORS.RED)
    })
    expect(result.current.isModalOpen).toBe(true)
    expect(result.current.selectedImage).toBe(COLORS.RED)
    
    act(() => {
      result.current.openModal(COLORS.GREEN)
    })
    expect(result.current.isModalOpen).toBe(true)
    expect(result.current.selectedImage).toBe(COLORS.GREEN)
  })

  it('should handle closing modal when already closed', () => {
    const { result } = renderHook(() => useImageModal())
    
    expect(result.current.isModalOpen).toBe(false)
    
    act(() => {
      result.current.closeModal()
    })
    
    expect(result.current.isModalOpen).toBe(false)
    expect(result.current.selectedImage).toBe(COLORS.RED)
  })

  it('should handle opening modal with same image twice', () => {
    const { result } = renderHook(() => useImageModal())
    
    act(() => {
      result.current.openModal(COLORS.WHITE)
    })
    expect(result.current.isModalOpen).toBe(true)
    expect(result.current.selectedImage).toBe(COLORS.WHITE)
    
    act(() => {
      result.current.openModal(COLORS.WHITE)
    })
    expect(result.current.isModalOpen).toBe(true)
    expect(result.current.selectedImage).toBe(COLORS.WHITE)
  })

  it('should expose all required functions', () => {
    const { result } = renderHook(() => useImageModal())
    
    expect(typeof result.current.openModal).toBe('function')
    expect(typeof result.current.closeModal).toBe('function')
    expect(typeof result.current.isModalOpen).toBe('boolean')
    expect(typeof result.current.selectedImage).toBe('string')
  })

  it('should handle all available color types', () => {
    const { result } = renderHook(() => useImageModal())
    
    Object.values(COLORS).forEach(color => {
      act(() => {
        result.current.openModal(color)
      })
      expect(result.current.selectedImage).toBe(color)
      expect(result.current.isModalOpen).toBe(true)
    })
  })

  it('should maintain state consistency through rapid operations', () => {
    const { result } = renderHook(() => useImageModal())
    
    act(() => {
      result.current.openModal(COLORS.RED)
      result.current.closeModal()
      result.current.openModal(COLORS.GREEN)
      result.current.openModal(COLORS.WHITE)
      result.current.closeModal()
    })
    
    expect(result.current.isModalOpen).toBe(false)
    expect(result.current.selectedImage).toBe(COLORS.WHITE)
  })
}) 