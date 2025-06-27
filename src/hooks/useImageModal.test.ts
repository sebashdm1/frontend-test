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
}) 