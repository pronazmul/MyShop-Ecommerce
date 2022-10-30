import React from 'react'
import ProfileSidebar from './ProfileSidebar'
import ProfileBody from './ProfileBody'

const Profile = () => {
  return (
    <div className='grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-4 lg:mt-6'>
      <div className='col-span-12 lg:col-span-4'>
        <ProfileSidebar />
      </div>
      <div className='col-span-12 lg:col-span-8'>
        <ProfileBody />
      </div>
    </div>
  )
}

export default Profile
