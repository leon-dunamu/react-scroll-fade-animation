import React from 'react';

export type pathType =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-bounce'
  | 'bottom-bounce'
  | 'left-bounce'
  | 'right-bounce'
  | string;

export interface ScrollAnimationItemProps
  extends React.HTMLProps<HTMLDivElement> {
  path: pathType;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  className?: string;
  offsetHeight?: number;
}

export interface ObserveAnimationItemProps
  extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  offset?: {
    x?: number;
    y?: number;
    z?: number;
  };
  reAnimate?: boolean;
  threshold?: Array<number> | number;
}
