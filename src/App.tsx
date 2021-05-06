import ScrollAnimationItem from './ScrollAnimation';

function App() {
  return (
    <div className="App">
      hi
      <div
        style={{
          height: '100vh',
          width: '100vw',
          border: '1px solid green',
        }}
      >
        zz
      </div>
      <ScrollAnimationItem path={'top'}>hi</ScrollAnimationItem>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          border: '1px solid green',
        }}
      >
        ??
      </div>
    </div>
  );
}

export default App;
