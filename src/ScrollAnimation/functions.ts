import ReactDOM from 'react-dom';
import { animations, characters } from './constants';
import { pathType } from './ScrollAnimationItem';

export function generateHashStringByLength(length: number = 6) {
  let result: Array<string> = [];
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }

  return result.join('');
}

export function findDivByRef(element: HTMLElement | null): HTMLDivElement {
  return ReactDOM.findDOMNode(element) as HTMLDivElement;
}

export function getAnimationType(path: 'top' | 'bottom' | 'left' | 'right') {
  return animations[path];
}

const makeTimeToMillisecondString = (number: number) => `${number}ms`;

export function setAnimation(
  element: HTMLDivElement,
  duration: number,
  delay: number,
  path: pathType,
) {
  element.style.animationDuration = makeTimeToMillisecondString(duration);
  element.style.animationDelay = makeTimeToMillisecondString(delay);
  element.style.animationName = getAnimationType(path);
}

export const endAnimation = (element: HTMLDivElement) => () => {
  element.style.opacity = '1';
};

export function createKeyframes() {
  const style = document.createElement('style');
  style.type = 'text/css';
  const keyFrames = `@keyframes seog-scroll-animation-bottom-top {
    from {
      opacity: 0;
      transform: translateY(120px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes seog-scroll-animation-top-bottom {
    from {
      opacity: 0;
      transform: translateY(-120px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes seog-scroll-animation-right-left {
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes seog-scroll-animation-left-right {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }`;
  style.innerHTML = keyFrames;
  document.getElementsByTagName('head')[0].appendChild(style);
}
