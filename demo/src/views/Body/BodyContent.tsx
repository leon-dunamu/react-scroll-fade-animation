import React from 'react';
import Prism from 'prismjs';
import { BodyContentItemProps } from './Body';

import ScrollFadeAnimationItem from 'react-scroll-fade-animation';

export default function BodyContent({
  title,
  description,
  code,
  id,
  type,
}: BodyContentItemProps) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={'body-content'}>
      <ScrollFadeAnimationItem
        path={id === 'init' ? 'top' : id}
        id={`rsfa-${id}`}
        className={'body-scroll-content'}
        offsetHeight={-400}
        reAnimate={true}
      >
        <h1>{title}</h1>
        {description.map((desc: string) => (
          <div key={desc} className={'body-content-desc'}>
            {desc}
          </div>
        ))}
        <pre>
          <code className={`language-${type ? type : 'js'}`}>
            {code.trim()}
          </code>
        </pre>
      </ScrollFadeAnimationItem>
    </div>
  );
}
