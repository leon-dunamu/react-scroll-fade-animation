# 🖱 React Scroll Fade Animation

NPM package for React Scroll Animation !

It is made with `Hooks` from `React-Typescript`.

You can use this with several animations by SIMPLE CODES.

## 💁🏻‍♂️ DEMO

- [React Scroll Fade Animation Demo](https://leon-dunamu.github.io/react-scroll-fade-animation/)

## 👀 Provide Animations (will be updated for more functions later)

### `import ScrollAnimate from 'react-scroll-fade-animation`

- `Fade` Bottom to Top ⬆️
- `Fade` Top to Bottom ⬇️
- `Fade` Left to Right ➡️
- `Fade` Right to Left ⬅️
- `Fade & Bounce` Bottom to Top ⬆️
- `Fade & Bounce` Top to Bottom ⬇️
- `Fade & Bounce` Left to Right ➡️
- `Fade & Bounce` Right to Left ⬅️

### `import ObserveAnimate from 'react-scroll-fade-animation/observe`

- set `offset` then you can set displaying path

Other functions are added later!

## 💡 HOW TO USE

### 🛠 Install

```bash
npm i react-scroll-fade-animation

or

yarn add react-scroll-fade-animation
```

### 📚 Import and Use

```jsx
import React from 'react';
import ScrollAnimate from 'react-scroll-fade-animation';

export default function App() {
  return (
    <div>
      <div
        style={{
          height: '100vh',
          border: '1px solid gray',
        }}
      >
        top blank
      </div>

      {/* This Element shows on Scroll */}
      <ScrollAnimate path={'bottom-bounce'}>{/* Insert Your Item ! */}</ScrollAnimate>

      <div
        style={{
          height: '100vh',
          border: '1px solid gray',
        }}
      >
        bottom blank
      </div>
    </div>
  );
}
```

This Component appears in middle of Viewport.

But you can custom `Duration`, `Delay` and `Wrapper Style`.

### 🏭 Props

#### Import Scroll

```jsx
import ScrollAnimate from 'react-scroll-fade-animation';
```

|  Prop Name   | Required | Default Value |  Type   |                                                                                                             Description                                                                                                             |
| :----------: | :------: | :-----------: | :-----: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     path     |    X     |      top      | string  |                 You can choose `'top','bottom','left','right','top-bounce','bottom-bounce','left-bounce','right-bounce' (low cases)`. It means appearance direction [example of 'top', it shows 'bottom' 👉 'top']                  |
|    delay     |    X     |       0       | number  |                                                                                                            Milliseconds                                                                                                             |
|   duration   |    X     |     1200      | number  |                                                                                                            Milliseconds                                                                                                             |
| offsetHeight |    X     |       0       | number  |       You can adjust the scroll height at which items are displayed. Both negative and positive numbers are possible. If the set value is `negative, it is displayed faster`, and if it is `positive, it is displayed later`.       |
|  reAnimate   |    X     |     false     | boolean | If the setting value is `true`, the item disappears if it moves back to the top of the view. If you scroll down the screen again, the animation that shows the item works `again`. Default(`false`) is not showing animation again. |

#### Import Observe

```jsx
import ScrollAnimate from 'react-scroll-fade-animation/observe';
```

| Prop Name | Required |    Default Value     |        Type        |                                                                                                             Description                                                                                                             |
| :-------: | :------: | :------------------: | :----------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   delay   |    X     |          0           |       number       |                                                                                                            Milliseconds                                                                                                             |
| duration  |    X     |         1200         |       number       |                                                                                                            Milliseconds                                                                                                             |
|  offset   |    X     | { x: 0, y: 0, z: 0 } |       Object       |                                                                                You can adjust the transition position at which items are displayed.                                                                                 |
| reAnimate |    X     |        false         |      boolean       | If the setting value is `true`, the item disappears if it moves back to the top of the view. If you scroll down the screen again, the animation that shows the item works `again`. Default(`false`) is not showing animation again. |
| threshold |    X     |         0.7          | number or number[] |                                  It refers to the percentage of the item appearing in the viewport. `0.7` means that 70% of the items wrapped in `scroll component` are displayed in the viewport.                                  |

## 🍔 Example

```jsx
import React from 'react';
import ScrollAnimationItem from 'react-scroll-fade-animation';

const ScrollItem = ({ title }) => (
  <ScrollAnimationItem
    path={'left'}
    delay={100}
    duration={1500}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {title}
  </ScrollAnimationItem>
);

export const ScrollWrapper = ({ itemList }) => (
  <>
    {itemList.map(item => (
      <ScrollItem key={title} title={title} />
    ))}
  </>
);
```

more Examples are in [DEMO](https://leon-dunamu.github.io/react-scroll-fade-animation/)

## 🧑🏻‍💻 Contribute

If you have a nice idea or something to modify codes or bugs, you can make `Issue` or `Pull Request` everytime!
