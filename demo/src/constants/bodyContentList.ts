export const bodyContentList = [
  {
    title: 'REACT SCROLL FADE ANIMATION',
    description: [
      'Use on Scroll Animation Item in ReactJS.',
      'If Item exists in middle of Viewport, it will appear !',
    ],
    code: `
      npm install react-scroll-fade-animation
    `,
    type: 'bash',
    id: 'init',
  },
  {
    title: 'top',
    description: ['Appear from bottom to top'],
    code: `
import ScrollAnimationItem from 'react-scroll-fade-animation';

export default function Item() {
  return <ScrollAnimationItem
    path={'top'}
    offsetHeight={-400}
    reAnimate={true}
  >
    Its top
  </ScrollAnimationItem>
}
    `,
    id: 'top',
  },
  {
    title: 'bottom',
    description: ['Appear from top to bottom'],
    code: `
import ScrollAnimationItem from 'react-scroll-fade-animation';

export default function Item() {
  return <ScrollAnimationItem
    path={'bottom'}
    offsetHeight={-400}
    reAnimate={true}
  >
    Its bottom
  </ScrollAnimationItem>
}
    `,
    id: 'bottom',
  },
  {
    title: 'left',
    description: ['Appear from right to left'],
    code: `
import ScrollAnimationItem from 'react-scroll-fade-animation';

export default function Item() {
  return <ScrollAnimationItem
    path={'left'}
    offsetHeight={-400}
    reAnimate={true}
  >
    Its left
  </ScrollAnimationItem>
}
    `,
    id: 'left',
  },
  {
    title: 'right',
    description: ['Appear from left to right'],
    code: `
import ScrollAnimationItem from 'react-scroll-fade-animation';

export default function Item() {
  return <ScrollAnimationItem
    path={'right'}
    offsetHeight={-400}
    reAnimate={true}
  >
    Its right
  </ScrollAnimationItem>
}
    `,
    id: 'right',
  },
  {
    title: 'top-bounce',
    description: ['Bounce from bottom to top'],
    code: `
import ScrollAnimationItem from 'react-scroll-fade-animation';

export default function Item() {
  return <ScrollAnimationItem
    path={'top-bounce'}
    offsetHeight={-400}
    reAnimate={true}
  >
    Its top-bounce
  </ScrollAnimationItem>
}
    `,
    id: 'top-bounce',
  },
  {
    title: 'bottom-bounce',
    description: ['Bounce from top to bottom'],
    code: `
import ScrollAnimationItem from 'react-scroll-fade-animation';

export default function Item() {
  return <ScrollAnimationItem
    path={'bottom'}
    offsetHeight={-400}
    reAnimate={true}
  >
    Its bottom-bounce
  </ScrollAnimationItem>
}
    `,
    id: 'bottom-bounce',
  },
  {
    title: 'left-bounce',
    description: ['Bounce from right to left'],
    code: `
import ScrollAnimationItem from 'react-scroll-fade-animation';

export default function Item() {
  return <ScrollAnimationItem
    path={'left'}
    offsetHeight={-400}
    reAnimate={true}
  >
    Its left-bounce
  </ScrollAnimationItem>
}
    `,
    id: 'left-bounce',
  },
  {
    title: 'right-bounce',
    description: ['Bounce from left to right'],
    code: `
import ScrollAnimationItem from 'react-scroll-fade-animation';

export default function Item() {
  return <ScrollAnimationItem
    path={'right'}
    offsetHeight={-400}
    reAnimate={true}
  >
    Its right-bounce
  </ScrollAnimationItem>
}
    `,
    id: 'right-bounce',
  },
];
