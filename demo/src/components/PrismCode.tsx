import React from 'react';
import Prism from 'prismjs';
import { AiOutlineCopy } from 'react-icons/ai';
import { NPM_INSTALL_COMMAND } from 'src/constants';

import Modal from 'src/components/Modal';
import { setModalAnimation } from './functions';

interface PrismCodeProps {
  type?: string;
  code: string;
}

function CopyButton({ type }: { type?: string }) {
  function onClickCopy() {
    const t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = NPM_INSTALL_COMMAND;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);

    setModalAnimation();
  }

  return type === 'bash' ? (
    <button id={'btn-copy'} onClick={onClickCopy}>
      <AiOutlineCopy style={{ color: 'white', fontSize: '20px' }} />
    </button>
  ) : null;
}

export default function PrismCode({ type, code }: PrismCodeProps) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <pre>
        <code className={`language-${type ? type : 'js'}`}>{code.trim()}</code>
        <CopyButton type={type} />
      </pre>
      <Modal />
    </>
  );
}
