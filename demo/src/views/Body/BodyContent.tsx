import React from 'react';

import { BodyContentItemProps } from './Body';
import PrismCode from 'src/components/PrismCode';

export default function BodyContent({
  title,
  description,
  code,
  id,
  type,
  WrapperComponent,
  options,
}: BodyContentItemProps) {
  return (
    <div className={'body-content'}>
      <WrapperComponent
        id={`rsfa-${id}`}
        className={'body-scroll-content'}
        {...options}
      >
        <h1>{title}</h1>
        {description.map((desc: string) => (
          <div key={desc} className={'body-content-desc'}>
            {desc}
          </div>
        ))}
        <PrismCode code={code} type={type} />
      </WrapperComponent>
    </div>
  );
}
