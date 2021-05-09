import React from 'react';
import Prism from 'prismjs';
import { BodyContentItemProps } from './Body';

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
    <div id={`rsfa-${id}`} className={'body-content'}>
      <h1>{title}</h1>
      {description.map((desc: string) => (
        <div key={desc} className={'body-content-desc'}>
          {desc}
        </div>
      ))}
      <pre>
        <code className={`language-${type ? type : 'js'}`}>{code.trim()}</code>
      </pre>
    </div>
  );
}
