// import * as React from "react";
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ScrollAnimationItem from '../../src';
import { ScrollAnimationItemProps } from '../utils/interfaces';
import { basicClassName } from '../utils/constants';

describe('onScrollFadeAnimation', function () {
  const props: ScrollAnimationItemProps = {
    children: <div>hi</div>,
    delay: 10,
    duration: 1000,
    path: 'top',
  };

  beforeEach(() => {
    document.body.innerHTML = "<div id='testDiv'></div>";
  });

  afterEach(() => {
    var test = global.document.getElementById('test');
    if (test) {
      ReactDOM.unmountComponentAtNode(test);
    }
    ReactDOM.unmountComponentAtNode(document.getElementById('testDiv') as Element);
  });

  it('renders normally', function () {
    const component = renderer.create(<ScrollAnimationItem {...props} />);
    let tree = component.toJSON();
    expect(tree).toBeDefined();
  });

  it('getBoundingClientRect top return 0 position', () => {
    ReactDOM.render(
      <ScrollAnimationItem {...props} />,
      global.document.getElementById('testDiv'),
    );

    const node = document.querySelector(`.${basicClassName}`);

    expect(node?.getBoundingClientRect().top).toBe(0);
  });
});
