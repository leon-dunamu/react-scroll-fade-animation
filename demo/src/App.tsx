import 'src/styles/App.scss';
import 'src/styles/Sidebar.scss';
import 'src/styles/Body.scss';

import React from 'react';

import Body from './views/Body';
import Sidebar from './views/Sidebar';

export default function App() {
  return (
    <div className={'app-container'}>
      <Sidebar />
      <Body />
    </div>
  );
}
