// Import types from constants to avoid magic strings
import type { ColorType, CookingPositionType } from '../constants';

// Re-export types for external use
export type { ColorType, CookingPositionType };

export type ImageClickHandler = (imageName: ColorType) => void;
export type ModalCloseHandler = () => void;
export type AnchorClickHandler = (linkName: string, href: string) => void;

export interface ColorCard {
  id: ColorType;
  title: string;
  description: string;
  imagePath: string;
}

export interface ColorCardProps {
  id: ColorType;
  imagePath: string;
  title: string;
  description: string;
  onImageClick: ImageClickHandler;
}

export interface ModalState {
  isOpen: boolean;
  selectedImage: ColorType;
}

export interface ImageModalProps {
  isOpen: boolean;
  imageName: ColorType;
  onClose: ModalCloseHandler;
}

export interface CookingImage {
  src: string;
  alt: string;
  position: CookingPositionType;
}

export interface CookingContent {
  headline: string;
  mainText: string;
  callOut: {
    title: string;
    description: string;
  };
}

// Component Props
export interface CookingImagesProps {
  className?: string;
}

export interface CookingContentProps {
  className?: string;
  onAnchorClick: AnchorClickHandler;
}


