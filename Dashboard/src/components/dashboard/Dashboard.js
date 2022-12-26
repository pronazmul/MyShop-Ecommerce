import React from 'react'
import { FunnelIcon } from '@heroicons/react/24/outline'

const Dashboard = () => {
  return (
    <div className='flex items-center justify-between py-5 lg:py-6'>
      <div className='flex items-center space-x-1'>
        <h2 className='text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl'>
          Sales Overview
          <FunnelIcon />
        </h2>
      </div>

      <div className='flex items-center space-x-2'></div>
    </div>
  )
}

export default Dashboard
