// import './Scroll.css';

import React from 'react';
import {
  createKeyframes,
  endAnimation,
  findDivByRef,
  generateHashStringByLength,
  setAnimation,
} from '../utils/functions';
import { basicClassName } from '../utils/constants';
import { ScrollAnimationItemProps } from '../utils/interfaces';

export default function ScrollAnimationItem({
  children,
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
    const {
      top: elementTopPosition,
      height: elementHeight,
    } = element.getBoundingClientRect() as ClientRect;

    if ((window.innerHeight + elementHeight) / 2 > elementTopPosition) {
      setAnimation(element, duration, delay, path);
      setTimeout(endAnimation(element), duration);
      window.removeEventListener('scroll', onScroll);
    }
  }

  React.useEffect(function () {
    createKeyframes();
  }, []);

  React.useEffect(function () {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <div className={className} style={styles} ref={ref} {...rest}>
      {children}
    </div>
  );
}

const styles: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '200px',
  opacity: '0',
  border: '1px solid green',
};
