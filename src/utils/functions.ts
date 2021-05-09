import ReactDOM from 'react-dom';
import makeKeyframes from './animations/make.keyframes';
import { animations, characters } from './constants';
import { pathType } from './interfaces';

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

export function getAnimationType(path: pathType) {
  return animations[path];
}

const makeTimeToMillisecondString = (number: number) => `${number}ms`;

export function setShowAnimation(
  element: HTMLDivElement,
  duration: number,
  delay: number,
  path: pathType,
) {
  element.style.animationDuration = makeTimeToMillisecondString(duration);
  element.style.animationDelay = makeTimeToMillisecondString(delay);
  element.style.animationName = getAnimationType(path);
}

export const endShowAnimation = (element: HTMLDivElement) => () => {
  element.style.opacity = '1';
  element.style.animation = 'none';
};

export function setHideAnimation(
  element: HTMLDivElement,
  duration: number,
  delay: number,
  path: pathType,
) {
  element.style.animationDuration = makeTimeToMillisecondString(duration);
  element.style.animationDelay = makeTimeToMillisecondString(delay);
  element.style.animationName = getAnimationType(path);
  element.style.animationDirection = 'reverse';
}

export const endHideAnimation = (element: HTMLDivElement) => {
  element.style.opacity = '0';
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
