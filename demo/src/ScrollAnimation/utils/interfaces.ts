export type pathType =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-bounce'
  | 'bottom-bounce'
  | 'left-bounce'
  | 'right-bounce';

export interface ScrollAnimationItemProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  path: pathType;
}
