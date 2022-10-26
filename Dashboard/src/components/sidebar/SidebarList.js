import React from 'react'
import SidebarListItem from './SidebarListItem'

const SidebarList = ({ data }) => {
  return (
    <ul class='flex flex-1 flex-col px-4 font-inter'>
      {data.map((node) => (
        <SidebarListItem key={node.key} node={node} />
      ))}
    </ul>
  )
}

export default SidebarList
