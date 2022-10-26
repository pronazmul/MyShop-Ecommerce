import React from 'react'
import UserList from './UserList'
import UserListHeader from './UserListHeader'

const Users = () => {
  return (
    <>
      {/* Users Card Header */}
      <UserListHeader />

      {/* Users List  Card */}
      <UserList />
    </>
  )
}

export default Users
