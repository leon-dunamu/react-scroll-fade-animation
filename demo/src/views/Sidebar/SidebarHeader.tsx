import React from 'react';
import { scrollToItemById } from 'src/components/functions';

export default function SidebarHeader() {
  const onClick = () => {
    scrollToItemById('rsfa-init');
  };

  return (
    <div className={'side-bar-header'} onClick={onClick}>
      <h1>React Scroll</h1>
      <h1>Fade Animation</h1>
    </div>
  );
}
