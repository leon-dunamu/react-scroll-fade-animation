import React from 'react';
import {
  createKeyframes,
  setShowScrollAnimation,
  endShowAnimation,
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
  offsetHeight = 0.7,
  reAnimate = false,
  ...rest
}: ScrollAnimationItemProps) {
  const [showed, setShowed] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const hashClassName = generateHashStringByLength(5);
  const newClassName = `${className || basicClassName} ssa-${hashClassName}`;

  const handleScroll: IntersectionObserverCallback = React.useCallback(function ([
    entry,
  ]) {
    const element = ref.current as HTMLDivElement;

    if (!showed && entry.isIntersecting) {
      setShowScrollAnimation(element, duration, delay, path);
      endShowAnimation(element);

      setShowed(true);
    } else if (showed && reAnimate && !entry.isIntersecting) {
      endHideAnimation(element);
      setShowed(false);
    }
  },
  []);

  React.useEffect(function () {
    createKeyframes();
  }, []);

  React.useEffect(
    function () {
      const { current } = ref;

      if (current) {
        const observer = new IntersectionObserver(handleScroll, {
          threshold: offsetHeight,
        });
        observer.observe(current);

        return () => observer && observer.disconnect();
      }

      return;
    },
    [handleScroll],
  );

  return (
    <div className={newClassName} style={styles} ref={ref} {...rest}>
      {children}
    </div>
  );
}

const styles: React.CSSProperties = {
  opacity: 0,
};
