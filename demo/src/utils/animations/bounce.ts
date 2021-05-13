export const bounceStyleList: Array<(keyframes: string) => string> = [
  bottomTopBounce,
  topBottomBounce,
  rightLeftBounce,
  leftRightBounce,
];

function bottomTopBounce(keyframes: string) {
  return `
    ${keyframes} seog-scroll-animation-bottom-top-bounce {
      0% {
        opacity: 0;
        transform: translateY(120px);
      }
      66% {
        transform: translateY(-24px);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }`;
}

function topBottomBounce(keyframes: string) {
  return `
    ${keyframes} seog-scroll-animation-top-bottom-bounce {
      0% {
        opacity: 0;
        transform: translateY(-120px);
      }
      66% {
        transform: translateY(24px);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }`;
}

function rightLeftBounce(keyframes: string) {
  return `
    ${keyframes} seog-scroll-animation-right-left-bounce {
      0% {
        opacity: 0;
        transform: translateX(200px);
      }
      66% {
        transform: translateX(-40px);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }`;
}

function leftRightBounce(keyframes: string) {
  return `
    ${keyframes} seog-scroll-animation-left-right-bounce {
      0% {
        opacity: 0;
        transform: translateX(-200px);
      }
      66% {
        transform: translateX(40px);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }`;
}
