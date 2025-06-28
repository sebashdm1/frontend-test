export const COLORS = {
  RED: 'red',
  GREEN: 'green',
  WHITE: 'white'
} as const;

export type ColorType = typeof COLORS[keyof typeof COLORS]; 