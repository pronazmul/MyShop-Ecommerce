import React from 'react'
import SidebarHeader from './SidebarHeader'
import SidebarList from './SidebarList'
import { sidebarTree } from '../../utils/data'

const Sidebar = () => {
  return (
    <div class='sidebar-panel'>
      <div class='flex h-full grow flex-col bg-white pl-4 dark:bg-navy-750'>
        {/* Sidebar Panel Header */}
        <SidebarHeader />
        {/* Sidebar Panel Body */}
        <div class='h-[calc(100%-4.5rem)] overflow-x-hidden pb-6'>
          <SidebarList data={sidebarTree} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
