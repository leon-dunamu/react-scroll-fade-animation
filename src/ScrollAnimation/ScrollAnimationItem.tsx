import './Scroll.css';

import React, { CSSProperties } from 'react';
import {
  endAnimation,
  findDivByRef,
  generateHashStringByLength,
  getAnimationType,
  setAnimation,
} from './functions';

export type pathType = 'top' | 'bottom' | 'left' | 'right';

interface ScrollAnimationItemProps {
  children: React.ReactNode;
  init?: boolean;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  path: pathType;
}

export default function ScrollAnimationItem({
  children,
  init = false,
  delay = 0,
  duration = 1500,
  path = 'top',
  ...rest
}: ScrollAnimationItemProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const hashClassName = generateHashStringByLength(5);
  const basicClassName = 'seog-scroll-animation-item';
  const className = `${basicClassName} ssa-${hashClassName}`;

  React.useEffect(function () {
    const element = findDivByRef(
      ref.current as HTMLElement,
    );
    setAnimation(element, duration, delay, path);

    setTimeout(endAnimation(element), duration);
  }, []);

  return (
    <div className={className} ref={ref} {...rest}>
      {children}
    </div>
  );
}
