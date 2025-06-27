import type { CookingImage, CookingContent } from '../../types';

export const cookingImages: CookingImage[] = [
  {
    src: '/images/cooking-left.png',
    alt: 'Cooking ingredients and preparation',
    position: 'left'
  },
  {
    src: '/images/cooking-right-top.png', 
    alt: 'Cooking process',
    position: 'right-top'
  },
  {
    src: '/images/cooking-right-bottom.png',
    alt: 'Final cooking result', 
    position: 'right-bottom'
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

 