// Application-wide color constants
export const COLORS = {
  RED: 'red',
  GREEN: 'green',
  WHITE: 'white'
} as const;

// Type derived from constants - ensures sync between constants and types
export type ColorType = typeof COLORS[keyof typeof COLORS]; 