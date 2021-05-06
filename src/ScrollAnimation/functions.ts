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
