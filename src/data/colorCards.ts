import type { ColorCard } from '../types';
import { COLORS } from '../constants/colors';

export const colorCardsData: ColorCard[] = [
  {
    id: COLORS.RED,
    title: 'RED',
    description: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.',
    imagePath: '/images/red.png'
  },
  {
    id: COLORS.GREEN,
    title: 'Green',
    description: 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours',
    imagePath: '/images/green.png'
  },
  {
    id: COLORS.WHITE,
    title: 'White',
    description: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.',
    imagePath: '/images/white.png'
  }
]; 