import React from 'react';
import BodyContent from './BodyContent';

export interface BodyContentItemProps {
  title: string;
  description: string[];
  code: string;
  id: string;
}

export default function Body() {
  return (
    <div className="body-container">
      {bodyContentList.map((item: BodyContentItemProps) => (
        <BodyContent {...item} key={item.id} />
      ))}
    </div>
  );
}

const bodyContentList = [
  {
    title: 'REACT SCROLL FADE ANIMATION',
    description: [
      'Use on Scroll Animation Item in ReactJS.',
      'If Item exists in middle of Viewport, it will appear !',
    ],
    code: '',
    id: 'init',
  },
  {
    title: 'top',
    description: ['Appear from bottom to top'],
    code: '',
    id: 'top',
  },
  {
    title: 'bottom',
    description: ['Appear from top to bottom'],
    code: '',
    id: 'bottom',
  },
  {
    title: 'left',
    description: ['Appear from right to left'],
    code: '',
    id: 'left',
  },
  {
    title: 'right',
    description: ['Appear from left to right'],
    code: '',
    id: 'right',
  },
  {
    title: 'top-bounce',
    description: ['Bounce from bottom to top'],
    code: '',
    id: 'top-bounce',
  },
  {
    title: 'bottom-bounce',
    description: ['Bounce from top to bottom'],
    code: '',
    id: 'bottom-bounce',
  },
  {
    title: 'left-bounce',
    description: ['Bounce from right to left'],
    code: '',
    id: 'left-bounce',
  },
  {
    title: 'right-bounce',
    description: ['Bounce from left to right'],
    code: '',
    id: 'right-bounce',
  },
];
