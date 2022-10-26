import React from 'react'
import Layout from '../components/layout/Layout'

const HomePage = () => {
  return (
    <Layout>
      <div className='flex items-center space-x-4 py-5 lg:py-6'>
        <h2 className='text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl'>
          Welcome to HomePage
        </h2>
      </div>
    </Layout>
  )
}

export default HomePage
