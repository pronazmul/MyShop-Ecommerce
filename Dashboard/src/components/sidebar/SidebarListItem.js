import React from 'react'
import { Link } from 'react-router-dom'
import SidebarList from './SidebarList'

const SidebarListItem = ({ node }) => {
  const [childVisible, setChildVisiblity] = React.useState(false)
  const hasChild = node.children?.length ? true : false

  const [isActive, setIsActive] = React.useState(true)

  return (
    <li>
      <Link
        onClick={() => setChildVisiblity((v) => !v)}
        class={`flex items-center justify-between py-2 text-xs+ tracking-wide text-slate-500 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50 ${
          childVisible && 'text-slate-800 font-semibold dark:text-navy-50'
        }`}
      >
        <span>{node.label}</span>
        {hasChild && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class={`h-4 w-4 text-slate-400 transition-transform ease-in-out ${
              childVisible && 'rotate-90'
            }`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5l7 7-7 7'
            />
          </svg>
        )}
      </Link>
      {hasChild && childVisible && (
        <ul className=''>
          <SidebarList data={node.children} />
        </ul>
      )}
    </li>
  )
}

export default SidebarListItem
