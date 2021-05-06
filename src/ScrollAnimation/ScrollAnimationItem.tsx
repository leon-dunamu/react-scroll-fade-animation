import './Scroll.css';

import React, { CSSProperties } from 'react';
import {
  endAnimation,
  findDivByRef,
  generateHashStringByLength,
  setAnimation,
} from './functions';
import { basicClassName } from './constants';

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
  duration = 1200,
  path = 'top',
  ...rest
}: ScrollAnimationItemProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const hashClassName = generateHashStringByLength(5);
  const className = `${basicClassName} ssa-${hashClassName}`;

  function onScroll() {
    const element = findDivByRef(ref.current);
    const { top, height } = element.getBoundingClientRect() as ClientRect;

    if (window.scrollY + (window.innerHeight + height) / 2 > top) {
      setAnimation(element, duration, delay, path);
      window.removeEventListener('scroll', onScroll);
      setTimeout(endAnimation(element), duration);
    }
  }

  React.useEffect(function () {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <div className={className} ref={ref} {...rest}>
      {children}
    </div>
  );
}
