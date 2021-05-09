import React from 'react';
import { BodyContentItemProps } from './Body';

export default function BodyContent({
  title,
  description,
  code,
  id,
}: BodyContentItemProps) {
  return (
    <div id={`rsfa-${id}`} className="body-content">
      <h1>{title}</h1>
      {description.map((desc: string) => (
        <div key={desc} className={'body-content-desc'}>
          {desc}
        </div>
      ))}
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
