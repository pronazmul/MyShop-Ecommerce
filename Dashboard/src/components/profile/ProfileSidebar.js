import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { profileTree } from '../../utils/data'

const ProfileSidebar = () => {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className='card p-4 sm:p-5'>
      <div className='flex items-center space-x-4'>
        <div className='avatar h-14 w-14'>
          <img className='rounded-full' src={user?.avatar} alt='avatar' />
        </div>
        <div>
          <h3 className='text-base font-medium text-slate-700 dark:text-navy-100'>
            {user?.name}
          </h3>
          <p className='text-xs+'>{user?.email}</p>
        </div>
      </div>
      <ul className='mt-6 space-y-1.5 font-inter font-medium'>
        {profileTree.map((profileLink) => (
          <li key={profileLink.key}>
            <Link>
              <div
                className={` w-full btn-icon ${
                  profileLink.key === 1 ? `btn-primary` : `btn-default`
                }`}
              >
                <span>
                  <i className={`h-5 w-5 ${profileLink.icon}`} />
                </span>
                <span>{profileLink.label}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProfileSidebar
