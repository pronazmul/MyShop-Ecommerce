import React from 'react'
import { useLocation } from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard'
import Layout from '../components/layout/Layout'
import Users from '../components/users/Users'
import { useLogoutQuery } from '../features/auth/authApi'

const HomePage = () => {
  const search = useLocation().search
  const component = new URLSearchParams(search).get('tab')

  //Logout
  useLogoutQuery(undefined, {
    skip: Boolean(component !== 'logout'),
  })

  const renderSection = (params) => {
    switch (params) {
      case 'dashboard':
        return <Dashboard />
      case 'all_users':
        return <Users />
      default:
        return <Dashboard />
    }
  }

  return <Layout>{renderSection(component)}</Layout>
}

export default HomePage
