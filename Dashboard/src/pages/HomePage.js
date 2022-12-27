import { data } from 'autoprefixer'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Users from '../components/users/Users'
import { useLogoutQuery } from '../features/auth/authApi'
import Profile from './../components/profile/Profile'
import Dashboard from './../components/dashboard/Dashboard'
import ProductList from '../components/ProductList/ProductList'

const HomePage = () => {
  const search = useLocation().search
  const component = new URLSearchParams(search).get('tab')

  //Logout
  const { refetch } = useLogoutQuery(undefined, {
    skip: Boolean(component !== 'logout'),
  })

  React.useEffect(() => {
    if (component === 'logout') {
      refetch()
    }
  }, [component, refetch])

  const renderSection = (params) => {
    switch (params) {
      case 'dashboard':
        return <Dashboard />
      case 'all_users':
        return <Users />
      case 'all_products':
        return <ProductList />
      case 'profile':
        return <Profile />
      default:
        return <Dashboard />
    }
  }

  return <Layout>{renderSection(component)}</Layout>
}

export default HomePage
