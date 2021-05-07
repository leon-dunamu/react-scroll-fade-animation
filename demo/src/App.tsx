import React from 'react';

import ScrollAnimationItem from './ScrollAnimation';
// import ScrollAnimationItem from 'react-scroll-fade-animation';

function App() {
  return (
    <div>
      <div style={{ height: '100vh', border: '1px solid gray' }}>dd</div>
      <ScrollAnimationItem path={'top-bounce'}>top-bounce</ScrollAnimationItem>
      <ScrollAnimationItem path={'left-bounce'}>left-bounce</ScrollAnimationItem>
      <ScrollAnimationItem path={'right-bounce'}>right-bounce</ScrollAnimationItem>
      <ScrollAnimationItem path={'bottom-bounce'}>bottom-bounce</ScrollAnimationItem>
      <ScrollAnimationItem path={'top'}>top</ScrollAnimationItem>
      <div style={{ height: '100vh', border: '1px solid gray' }}>dd</div>
    </div>
  );
}

export default App;
