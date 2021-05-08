import React from 'react';
import Prism from 'prismjs';

interface PrismCodeProps {
  code: string;
  language: string;
}

export default function PrismCode({ code, language }: PrismCodeProps) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="code">
      <pre>
        <code className={`language-${language}`}>{code.trim()}</code>
      </pre>
    </div>
  );
}
