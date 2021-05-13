// import ScrollAnimate from 'src/scroll';
// import ObserveAnimate from 'src/observe';

import ScrollAnimate from 'react-scroll-fade-animation';
import ObserveAnimate from 'react-scroll-fade-animation/observe';

export const bodyContentList = [
  {
    title: 'REACT SCROLL FADE ANIMATION',
    description: [
      'Use on Scroll Animation Item in ReactJS.',
      'If Item exists in Viewport, it will be displayed!',
    ],
    code: `
      npm install react-scroll-fade-animation
    `,
    type: 'bash',
    id: 'init',
    WrapperComponent: ObserveAnimate,
    options: {
      offset: {
        y: 0,
      },
    },
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
  >
    Its top
  </ScrollAnimationItem>
}
    `,
    id: 'top',
    WrapperComponent: ScrollAnimate,
    options: {
      path: 'top',
    },
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
  >
    Its bottom
  </ScrollAnimationItem>
}
    `,
    id: 'bottom',
    WrapperComponent: ScrollAnimate,
    options: {
      path: 'bottom',
    },
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
  >
    Its left
  </ScrollAnimationItem>
}
    `,
    id: 'left',
    WrapperComponent: ScrollAnimate,
    options: {
      path: 'left',
    },
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
  >
    Its right
  </ScrollAnimationItem>
}
    `,
    id: 'right',
    WrapperComponent: ScrollAnimate,
    options: {
      path: 'right',
    },
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
  >
    Its top-bounce
  </ScrollAnimationItem>
}
    `,
    id: 'top-bounce',
    WrapperComponent: ScrollAnimate,
    options: {
      path: 'top-bounce',
    },
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
  >
    Its bottom-bounce
  </ScrollAnimationItem>
}
    `,
    id: 'bottom-bounce',
    WrapperComponent: ScrollAnimate,
    options: {
      path: 'bottom-bounce',
    },
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
  >
    Its left-bounce
  </ScrollAnimationItem>
}
    `,
    id: 'left-bounce',
    WrapperComponent: ScrollAnimate,
    options: {
      path: 'left-bounce',
    },
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
  >
    Its right-bounce
  </ScrollAnimationItem>
}
    `,
    id: 'right-bounce',
    WrapperComponent: ScrollAnimate,
    options: {
      path: 'right-bounce',
    },
  },
  {
    title: 'Observe - offset',
    description: ['Appear from bottom to top'],
    code: `
import ObserveAnimationItem from 'react-scroll-fade-animation/observe';

export default function Item() {
  return <ObserveAnimationItem
    offset={{ x:200, y:0 }}
  >
    Its from left
  </ObserveAnimationItem>
}
    `,
    id: 'offset',
    WrapperComponent: ObserveAnimate,
    options: {
      offset: {
        x: 200,
        y: 0,
      },
    },
  },
  {
    title: 'Observe - reAnimate',
    description: ['Appear from top to bottom'],
    code: `
import ObserveAnimationItem from 'react-scroll-fade-animation/observe';

export default function Item() {
  return <ObserveAnimationItem
    reAnimate={true}
  >
    Its re-Animate by scroll
  </ObserveAnimationItem>
}
    `,
    id: 'reAnimate',
    WrapperComponent: ObserveAnimate,
    options: {
      reAnimate: true,
    },
  },
  {
    title: 'Observe - offset X, Y & duration',
    description: ['Appear from right to left'],
    code: `
import ObserveAnimationItem from 'react-scroll-fade-animation/observe';

export default function Item() {
  return <ScrollAnimationItem
    offset={{ x:-200, y:200 }}
    duration={500}
  >
    Its from right-top
  </ScrollAnimationItem>
}
    `,
    id: 'duration',
    WrapperComponent: ObserveAnimate,
    options: {
      offset: {
        x: -200,
        y: 200,
      },
      duration: 500,
    },
  },
  {
    title: 'Enjoy Your custom Animation',
    description: ['Observe supports you for free displaying direction'],
    code: `
import ObserveAnimationItem from 'react-scroll-fade-animation/observe';

export default function Item() {
  return <ScrollAnimationItem
    offset={{ x:200, y:200, z: -300 }}
    duration={5000}
    threshold={0.1}
  >
    Its from left-bottom
  </ScrollAnimationItem>
}
    `,
    id: 'custom',
    WrapperComponent: ObserveAnimate,
    options: {
      offset: {
        x: 200,
        y: 200,
        z: -300,
      },
      duration: 5000,
      threshold: 0.1,
    },
  },
];
