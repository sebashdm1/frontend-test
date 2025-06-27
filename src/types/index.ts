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

export interface ImageModalProps {
  isOpen: boolean;
  imageName: ColorType;
  onClose: () => void;
}

export interface ModalState {
  isOpen: boolean;
  selectedImage: ColorType;
}

export type ImageClickHandler = (imageName: ColorType) => void;
export type ModalCloseHandler = () => void;
export type AnchorClickHandler = (linkName: string, href: string) => void;

export interface CookingImagesProps {
  className?: string;
}

export interface CookingContentProps {
  className?: string;
  onAnchorClick: AnchorClickHandler;
}

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


