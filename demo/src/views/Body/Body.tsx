import React from 'react';
import { bodyContentList } from 'src/constants/bodyContentList';
import BodyContent from './BodyContent';

export interface BodyContentItemProps {
  title: string;
  description: string[];
  code: string;
  id: string;
  type?: string;
}

export default function Body() {
  return (
    <div className={'body-container'}>
      {bodyContentList.map((item: BodyContentItemProps) => (
        <BodyContent {...item} key={item.id} />
      ))}
    </div>
  );
}
