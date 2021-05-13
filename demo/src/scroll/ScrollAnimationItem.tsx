import React from 'react';
import {
  createKeyframes,
  endShowAnimation,
  findDivByRef,
  generateHashStringByLength,
  setShowScrollAnimation,
} from '../utils/functions';
import { basicClassName } from '../utils/constants';
import { ScrollAnimationItemProps } from '../utils/interfaces';

export default function ScrollAnimationItem({
  children,
  delay = 0,
  duration = 1200,
  path = 'top',
  className,
  offsetHeight = 0,
  ...rest
}: ScrollAnimationItemProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const hashClassName = generateHashStringByLength(5);
  const newClassName = `${className || basicClassName} ssa-${hashClassName}`;

  function onScroll() {
    const element = findDivByRef(ref.current);
    const { top: elementTopPosition } =
      element.getBoundingClientRect() as ClientRect;

    if (window.innerHeight / 2 + offsetHeight > elementTopPosition) {
      setShowScrollAnimation(element, duration, delay, path);
      endShowAnimation(element, duration);

      window.removeEventListener('scroll', onScroll);
    }
  }

  React.useEffect(function () {
    createKeyframes();
  }, []);

  React.useEffect(function () {
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={newClassName} style={styles} ref={ref} {...rest}>
      {children}
    </div>
  );
}

const styles: React.CSSProperties = {
  opacity: 0,
  overflow: 'hidden',
};
