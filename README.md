# 🖱 React Scroll Fade Animation

NPM package for React Scroll Animation !

It is made with `Hooks` from `React-Typescript`.

You can use this with several animations by SIMPLE CODES.

## 👀 Provide Animations (will be updated for more functions later)

* `Fade` Bottom to Top ⬆️
* `Fade` Top to Bottom ⬇️
* `Fade` Left to Right ➡️
* `Fade` Right to Left ⬅️
* `Fade & Bounce` Bottom to Top ⬆️
* `Fade & Bounce` Top to Bottom ⬇️
* `Fade & Bounce` Left to Right ➡️
* `Fade & Bounce` Right to Left ⬅️

Other functions are added later!

## 💡 HOW TO USE

### Install

```bash
npm i react-scroll-fade-animation

or

yarn add react-scroll-fade-animation
```

### Import and Use

```jsx
import React from 'react';
import ScrollAnimationItem from 'react-scroll-fade-animation';

export default function App() {
  return (
    <div>
      <div style={{ 
        height: '100vh', 
        border: '1px solid gray' 
      }}>top blank</div>

      {/* This Element shows on Scroll */}
      <ScrollAnimationItem path={'bottom-bounce'}>
        {/* Insert Your Item ! */}
      </ScrollAnimationItem>

      <div style={{ 
        height: '100vh', 
        border: '1px solid gray' 
      }}>bottom blank</div>
    </div>
  );
}
```

This Component appears in middle of Viewport.

But you can custom `Duration`, `Delay` and `Wrapper Style`.

### Props

| Prop Name | Required | Default Value | Type | Description |
|:---:|:---:|:---:|:---:|:---:|
|path|O|top|string|You can choose `'top','bottom','left','right','top-bounce','bottom-bounce','left-bounce','right-bounce' (low cases)`. It means appearance direction [example of 'top', it shows 'bottom' 👉 'top']|
|delay|X|0|number|Milliseconds|
|duration|X|1200|number|Milliseconds|
|style|X|{ }|React.CSSProperties|Camel-case inline style, The Wrapper Component's style|

## Example

```jsx
import React from 'react';
import ScrollAnimationItem from 'react-scroll-fade-animation';

const ScrollItem = ({title}) => (<ScrollAnimationItem
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
</ScrollAnimationItem>);

export const ScrollWrapper = ({itemList}) => (<>
    {itemList.map(item => <ScrollItem key={title} title={title} />)}
</ScrollItem>);

```

## Contribute

If you have a nice idea or something to modify codes or bugs, you can make `Issue` or `Pull Request` everytime!