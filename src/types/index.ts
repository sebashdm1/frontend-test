// Color types for the ColorsSection
export type ColorType = 'red' | 'green' | 'white';

export interface ColorCard {
  id: ColorType;
  title: string;
  description: string;
  imagePath: string;
}

// Modal types
export interface ImageModalProps {
  imageName: ColorType | null;
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


