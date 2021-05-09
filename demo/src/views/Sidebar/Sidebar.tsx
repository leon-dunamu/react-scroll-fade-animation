import React from 'react';

import SidebarHeader from './SidebarHeader';
import SidebarContentList from './SidebarContentList';
import SideToTopButton from './SideToTopButton';

export default function Sidebar() {
  return (
    <>
      <div className={'side-bar-container'}>
        <SidebarHeader />
        <SidebarContentList />
      </div>
      <SideToTopButton />
    </>
  );
}
