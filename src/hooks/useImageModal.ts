import { useState } from 'react';
import type { ColorType, ModalState } from '../types';

const DEFAULT_IMAGE: ColorType = 'red'; // fallback predeterminado

export const useImageModal = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    selectedImage: DEFAULT_IMAGE
  });

  const openModal = (imageName: ColorType) => {
    setModalState({
      isOpen: true,
      selectedImage: imageName
    });
  };

  const closeModal = () => {
    setModalState(prevState => ({
      ...prevState,
      isOpen: false
    }));
  };

  return {
    isModalOpen: modalState.isOpen,
    selectedImage: modalState.selectedImage,
    openModal,
    closeModal
  };
}; 