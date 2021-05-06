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
  duration = 1500,
  path = 'top',
  ...rest
}: ScrollAnimationItemProps) {
  const [showed, setShowed] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const hashClassName = generateHashStringByLength(5);
  const className = `${basicClassName} ssa-${hashClassName}`;

  function onScroll() {
    if (showed === false) {
      const element = findDivByRef(ref.current);
      const { top } = element.getBoundingClientRect() as ClientRect;

      if (window.scrollY + window.innerHeight / 3 > top) {
        setShowed(true);
        window.removeEventListener('scroll', onScroll);
      }
    }
  }

  React.useEffect(function () {
    const element = findDivByRef(ref.current as HTMLElement);
    setAnimation(element, duration, delay, path);

    setTimeout(endAnimation(element), duration);
  }, []);

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
