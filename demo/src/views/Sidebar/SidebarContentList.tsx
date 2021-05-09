import React from 'react';
import {
  addClassNameAtElement,
  removeClassName,
  scrollToItemById,
} from 'src/components/functions';
import { animationList } from 'src/constants/animationList';

export default function SidebarContentList() {
  const onClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    removeClassName('focus-item');

    const element = e.target as HTMLElement;
    addClassNameAtElement(element, 'focus-item');

    scrollToItemById(`rsfa-${element.id}`);
  };

  return (
    <ul className={'side-bar-content'}>
      <h2>ANIMATION LIST</h2>
      {animationList.map((animationTitle: string) => (
        <li key={animationTitle} id={animationTitle} onClick={onClick}>
          {animationTitle}
        </li>
      ))}
    </ul>
  );
}
