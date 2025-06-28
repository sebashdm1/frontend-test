// Position constants for cooking images
export const COOKING_POSITIONS = {
  LEFT: 'left',
  RIGHT_TOP: 'right-top',
  RIGHT_BOTTOM: 'right-bottom'
} as const;

// Type derived from constants
export type CookingPositionType = typeof COOKING_POSITIONS[keyof typeof COOKING_POSITIONS]; 