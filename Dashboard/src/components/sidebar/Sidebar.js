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
        <SidebarList data={sidebarTree} />
      </div>
    </div>
  )
}

export default Sidebar
