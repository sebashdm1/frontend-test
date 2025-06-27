// Color types for the ColorsSection
export type ColorType = 'red' | 'green' | 'white';

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

// Modal types - REFACTORED: No more null!
export interface ImageModalProps {
  isOpen: boolean;
  imageName: ColorType;
  onClose: () => void;
}

// Event handler types
export type ImageClickHandler = (imageName: ColorType) => void;
export type ModalCloseHandler = () => void;
export type AnchorClickHandler = (linkName: string, href: string) => void;

// CookingSection types
export interface CookingImage {
  src: string;
  alt: string;
  position: 'left' | 'right-top' | 'right-bottom';
}

export interface CookingContent {
  headline: string;
  mainText: string;
  callOut: {
    title: string;
    description: string;
  };
}


