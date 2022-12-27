import React from 'react'
import { FunnelIcon } from '@heroicons/react/24/outline'

const DashboardHeader = () => {
  return (
    <div className='flex items-center justify-between '>
      <div>
        <h2 className='text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl'>
          Sales Overview
        </h2>
        <p>View your current sales & summery</p>
      </div>
      <div>
        <button className='flex space-x-1 btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90'>
          <FunnelIcon className='h-5 w-5' />
          <span>Filter</span>
        </button>
      </div>
    </div>
  )
}

export default DashboardHeader
