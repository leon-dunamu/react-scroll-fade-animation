import React from 'react';
import { scrollToItemById } from 'src/components/functions';

export default function SideToTopButton() {
  const onClick = () => {
    scrollToItemById('root');
  };

  return (
    <button className={'btn-to-top'} onClick={onClick}>
      top
    </button>
  );
}
