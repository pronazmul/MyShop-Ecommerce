import React from 'react'
import { demoUsers } from '../../utils/data'
import UserListItem from './UserListItem'

const UserList = () => {
  return (
    <div class='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 (lg:grid-cols-3 lg:gap-6 xl:grid-cols-4'>
      {demoUsers.map((user) => (
        <UserListItem key={user._id} user={user} />
      ))}
    </div>
  )
}

export default UserList
