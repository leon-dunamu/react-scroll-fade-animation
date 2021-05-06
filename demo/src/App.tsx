import React from 'react';

// import ScrollAnimationItem from './ScrollAnimation';
import ScrollAnimationItem from 'react-scroll-fade-animation';

function App() {
  return (
    <div>
      <div style={{ height: '100vh', border: '1px solid gray' }}>dd</div>
      <ScrollAnimationItem path={'bottom'}>hi</ScrollAnimationItem>
      <div style={{ height: '100vh', border: '1px solid gray' }}>dd</div>
    </div>
  );
}

export default App;
