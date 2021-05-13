export const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const basicClassName = 'seog-scroll-animation-item';

const animationCommonName = 'seog-scroll-animation';

export const seogCSS = `
.${basicClassName} {
  width: 100%;
  height: 200px;
  position: relative;
  opacity: 0;
}`;

export const animations = {
  top: `${animationCommonName}-bottom-top`,
  bottom: `${animationCommonName}-top-bottom`,
  left: `${animationCommonName}-right-left`,
  right: `${animationCommonName}-left-right`,
  'top-bounce': `${animationCommonName}-bottom-top-bounce`,
  'bottom-bounce': `${animationCommonName}-top-bottom-bounce`,
  'left-bounce': `${animationCommonName}-right-left-bounce`,
  'right-bounce': `${animationCommonName}-left-right-bounce`,
};

export const crossBrowser = [
  '@keyframes',
  '@-webkit-keyframes',
  '@-moz-keyframes',
  '@-ms-keyframes',
  '@-o-keyframes',
];
