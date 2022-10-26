import React from 'react'
import SidebarListItem from './SidebarListItem'

const SidebarList = ({ data }) => {
  return (
    <div class='h-[calc(100%-4.5rem)] overflow-x-hidden pb-6 scrollbar-sm'>
      <ul class='flex flex-1 flex-col px-4 font-inter'>
        {data.map((node) => (
          <SidebarListItem key={node.key} node={node} />
        ))}
      </ul>
    </div>
  )
}

export default SidebarList
