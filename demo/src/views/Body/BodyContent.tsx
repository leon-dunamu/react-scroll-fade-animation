import React from 'react';

import { BodyContentItemProps } from './Body';
// import ScrollFadeAnimationItem from 'react-scroll-fade-animation';
import PrismCode from 'src/components/PrismCode';
import ScrollFadeAnimationItem from 'src/observe'

export default function BodyContent({
  title,
  description,
  code,
  id,
  type,
}: BodyContentItemProps) {
  return (
    <div className={'body-content'}>
      <ScrollFadeAnimationItem
        // path={id === 'init' ? 'right' : id}
        id={`rsfa-${id}`}
        className={'body-scroll-content'}
        offset={{y:100}}
        reAnimate={true}
      >
        <h1>{title}</h1>
        {description.map((desc: string) => (
          <div key={desc} className={'body-content-desc'}>
            {desc}
          </div>
        ))}
        <PrismCode code={code} type={type} />
      </ScrollFadeAnimationItem>
    </div>
  );
}
