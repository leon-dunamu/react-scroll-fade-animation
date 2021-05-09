// import './Scroll.css';
import '../styles/index.css';
import React from 'react';
import {
  createKeyframes,
  setShowAnimation,
  endShowAnimation,
  findDivByRef,
  generateHashStringByLength,
  endHideAnimation,
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
  reAnimate = false,
  ...rest
}: ScrollAnimationItemProps) {
  const [showed, setShowed] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const hashClassName = generateHashStringByLength(5);
  const newClassName = `${className || basicClassName} ssa-${hashClassName}`;

  function onScroll() {
    const element = findDivByRef(ref.current);
    const {
      top: elementTopPosition,
      height: elementHeight,
    } = element.getBoundingClientRect() as ClientRect;

    if (
      !showed &&
      (window.innerHeight + elementHeight) / 2 + offsetHeight > elementTopPosition
    ) {
      setShowAnimation(element, duration, delay, path);
      setTimeout(endShowAnimation(element), duration);

      reAnimate && setShowed(true);
      reAnimate || window.removeEventListener('scroll', onScroll);
    } else if (
      showed &&
      (window.innerHeight + elementHeight) / 2 + offsetHeight < elementTopPosition
    ) {
      endHideAnimation(element);
      setShowed(false);
    }
  }

  React.useEffect(function () {
    createKeyframes();
  }, []);

  React.useEffect(function () {
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <div className={newClassName} style={styles} ref={ref} {...rest}>
      {children}
    </div>
  );
}

const styles: React.CSSProperties = {
  opacity: 0,
};
