import React from 'react';
import {
  addClassNameAtElement,
  removeClassName,
  scrollToItemById,
} from 'src/components/functions';
import { animationList } from 'src/constants/animationList';

interface ListType {
  title: string;
  list: string[];
}

export default function SidebarContentList() {
  const onClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    removeClassName('focus-item');

    const element = e.target as HTMLElement;
    addClassNameAtElement(element, 'focus-item');

    scrollToItemById(`rsfa-${element.id}`);
  };

  return (
    <ul className={'side-bar-content'}>
      {animationList.map(({ title, list }: ListType) => {
        return (
          <ul key={title}>
            <h2>{title}</h2>
            {list.map((subtitle: string) => (
              <li key={subtitle} id={subtitle} onClick={onClick}>
                {subtitle}
              </li>
            ))}
          </ul>
        );
      })}
    </ul>
  );
}
