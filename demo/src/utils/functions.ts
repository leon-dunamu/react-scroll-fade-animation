import ReactDOM from 'react-dom';
import makeKeyframes from './animations/make.keyframes';
import { animations, characters } from './constants';
import { pathType } from './interfaces';

export function generateHashStringByLength(length: number = 6) {
  let result: Array<string> = [];
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength)),
    );
  }

  return result.join('');
}

export function findDivByRef(element: HTMLElement | null): HTMLDivElement {
  return ReactDOM.findDOMNode(element) as HTMLDivElement;
}

export function getAnimationType(path: pathType) {
  return animations[path];
}

export const makeTimeToMillisecondString = (number: number) => `${number}ms`;

export function setShowObserveAnimation(
  element: HTMLDivElement,
  duration: number,
  delay: number,
) {
  element.style.transitionProperty = 'opacity transform';
  element.style.transitionDuration = makeTimeToMillisecondString(duration);
  element.style.transitionDelay = makeTimeToMillisecondString(delay);
  element.style.opacity = '1';
  element.style.transform = `translate3d(0, 0, 0)`;
}

export function setShowScrollAnimation(
  element: HTMLDivElement,
  duration: number,
  delay: number,
  path: pathType,
) {
  element.style.animationDuration = makeTimeToMillisecondString(duration);
  element.style.animationDelay = makeTimeToMillisecondString(delay);
  element.style.animationName = getAnimationType(path);
}

export const endShowAnimation = (element: HTMLDivElement, duration: number) => {
  element.style.opacity = '1';

  setTimeout(() => {
    element.style.animation = 'none';
  }, duration);
};

export function setHideObserveAnimation(
  element: HTMLDivElement,
  duration: number,
  delay: number,
  offset: { x?: number; y?: number; z?: number },
) {
  element.style.transitionProperty = 'opacity transform';
  element.style.transitionDuration = makeTimeToMillisecondString(duration / 5);
  element.style.transitionDelay = makeTimeToMillisecondString(delay);
  element.style.opacity = '0';
  element.style.transform = `translate3d(${offset.x ? -offset.x : 0}px, ${
    offset.y ? -offset.y : 0
  }px, ${offset.z ? -offset.z : 0}px)`;
}

export function setHideScrollAnimation(
  element: HTMLDivElement,
  duration: number,
  delay: number,
  path: pathType,
) {
  element.style.animationDuration = makeTimeToMillisecondString(duration / 3);
  element.style.animationDelay = makeTimeToMillisecondString(delay);
  element.style.animationName = getAnimationType(path);
  element.style.animationDirection = 'reverse';
}

export const endHideAnimation = (element: HTMLDivElement, duration: number) => {
  element.style.opacity = '0';

  setTimeout(() => {
    element.style.animation = 'none';
  }, duration / 3);
};

let isCreated = false;

export function createKeyframes() {
  if (!isCreated) isCreated = true;
  else return;

  const style = document.createElement('style');
  style.type = 'text/css';
  const keyFrames = makeKeyframes();
  style.innerHTML = keyFrames;
  document.getElementsByTagName('head')[0].appendChild(style);
}
