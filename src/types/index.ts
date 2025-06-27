import type { ColorType } from '../constants/colors';
import type { CookingPositionType } from '../constants/positions';

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

export interface CookingImagesProps {
  className?: string;
}

export interface CookingContentProps {
  className?: string;
  onAnchorClick: AnchorClickHandler;
  content?: CookingContent;
}

export interface ColorsSectionContent {
  title: string;
  cards: ColorCard[];
}

export interface ColorsSectionProps {
  content?: ColorsSectionContent;
}


