export const defaultStyleList: Array<(keyframes: string) => string> = [
  bottomTopDefault,
  topBottomDefault,
  rightLeftDefault,
  leftRightDefault,
];

function bottomTopDefault(keyframes: string) {
  return `
    ${keyframes} seog-scroll-animation-bottom-top {
      from {
        opacity: 0;
        transform: translateY(120px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }`;
}

function topBottomDefault(keyframes: string) {
  return `
    ${keyframes} seog-scroll-animation-top-bottom {
      from {
        opacity: 0;
        transform: translateY(-120px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }`;
}

function rightLeftDefault(keyframes: string) {
  return `
    ${keyframes} seog-scroll-animation-right-left {
      from {
        opacity: 0;
        transform: translateX(200px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }`;
}

function leftRightDefault(keyframes: string) {
  return `
    ${keyframes} seog-scroll-animation-left-right {
      from {
        opacity: 0;
        transform: translateX(-200px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }`;
}
