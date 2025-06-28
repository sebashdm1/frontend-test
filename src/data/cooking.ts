import type { CookingImage, CookingContent } from '../types';
import { COOKING_POSITIONS } from '../constants/positions';

export const cookingImages: CookingImage[] = [
  {
    src: '/images/cooking-left.png',
    alt: 'Cooking ingredients and preparation',
    position: COOKING_POSITIONS.LEFT
  },
  {
    src: '/images/cooking-right-top.png', 
    alt: 'Cooking process',
    position: COOKING_POSITIONS.RIGHT_TOP
  },
  {
    src: '/images/cooking-right-bottom.png',
    alt: 'Final cooking result', 
    position: COOKING_POSITIONS.RIGHT_BOTTOM
  }
];

export const cookingContent: CookingContent = {
  headline: 'WHAT DOES COOKING MEAN?',
  mainText: 'Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...',
  callOut: {
    title: 'THE PERFECT EGG',
    description: 'Keep water between 67 and 68°C for a flavourful, tender yolk'
  }
}; 