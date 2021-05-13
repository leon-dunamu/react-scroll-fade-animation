import React from 'react';
import { setHideObserveAnimation, setShowObserveAnimation } from '../utils/functions';
import { basicClassName } from '../utils/constants';
import { ObserveAnimationItemProps } from '../utils/interfaces';

export default function ScrollAnimationItem({
  children,
  delay = 0,
  duration = 1200,
  className,
  offset = { x: 0, y: 0, z: 0 },
  threshold = 0.7,
  reAnimate = false,
  ...rest
}: ObserveAnimationItemProps) {
  const [showed, setShowed] = React.useState(false);
  const [previous, setPrevious] = React.useState({
    y: 1,
    ratio: -1,
  });
  const ref = React.useRef<HTMLDivElement>(null);
  const style = useStyles(offset);

  const newClassName = `${className || basicClassName}`;

  const handleScroll: IntersectionObserverCallback = React.useCallback(
    function ([entry]) {
      const element = ref.current as HTMLDivElement;
      const currentY = entry.boundingClientRect.y;
      const currentRatio = entry.intersectionRatio;
      const isIntersecting = entry.isIntersecting;

      // Scrolling down/up
      if (currentY < previous.y) {
        if (currentRatio > previous.ratio && isIntersecting && !showed) {
          setShowObserveAnimation(element, duration, delay);
          setTimeout(() => {
            setShowed(true);
          }, duration / 2);
        }
      } else if (currentY > previous.y && !isIntersecting && showed && reAnimate) {
        if (currentRatio < previous.ratio) {
          setHideObserveAnimation(element, duration, delay, offset);
          setTimeout(() => {
            setShowed(false);
          }, duration / 2);
        }
      }

      if (!showed || (showed && reAnimate)) {
        if (previous.y != currentY && previous.ratio != currentRatio) {
          setPrevious({
            y: currentY,
            ratio: currentRatio,
          });
        }
      }
    },
    [previous, showed],
  );

  React.useEffect(() => {
    const { current } = ref;

    if (current) {
      const observer = new IntersectionObserver(handleScroll, { threshold });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }

    return;
  }, [handleScroll]);

  return (
    <div className={newClassName} style={style} ref={ref} {...rest}>
      {children}
    </div>
  );
}

function useStyles({
  x = 0,
  y = 0,
  z = 0,
}: {
  x?: number;
  y?: number;
  z?: number;
}): React.CSSProperties {
  return {
    opacity: 0,
    overflow: 'hidden',
    transform: `translate3d(${-x}px, ${-y}px, ${-z}px)`,
  };
}
