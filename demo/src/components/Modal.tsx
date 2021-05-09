import React from 'react';

import { BsCheckCircle } from 'react-icons/bs';

export default function Modal() {
  return (
    <div className={'modal-container'}>
      <BsCheckCircle />
      <span>copied!</span>
    </div>
  );
}
