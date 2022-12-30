import React from 'react'
import { useLocation } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Users from '../components/users/Users'
import { useLogoutQuery } from '../features/auth/authApi'
import Dashboard from './../components/dashboard/Dashboard'
import ProductList from '../components/productList/ProductList'
import AddProduct from '../components/addProduct/AddProduct'
import UpdateProfile from './../components/updateProfile/UpdateProfile'
import UpdatePassword from './../components/updatePassword/UpdatePassword'
import LinkedDeivces from './../components/linkedDevices/LinkedDeivces'
import CategoryList from '../components/categoryList/CategoryList'
import AddCategory from './../components/addCategory/AddCategory'
import { useDispatch } from 'react-redux'
import { sidebarToggled } from '../features/global/globalSlice'

const HomePage = () => {
  const search = useLocation().search
  const dispatch = useDispatch()
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
        dispatch(sidebarToggled())
        return <Dashboard />
      case 'all_users':
        dispatch(sidebarToggled())
        return <Users />
      case 'all_products':
        dispatch(sidebarToggled())
        return <ProductList />
      case 'add_products':
        dispatch(sidebarToggled())
        return <AddProduct />
      case 'all_categories':
        dispatch(sidebarToggled())
        return <CategoryList />
      case 'add_categories':
        dispatch(sidebarToggled())
        return <AddCategory />
      case 'update_profile':
        dispatch(sidebarToggled())
        return <UpdateProfile />
      case 'update_password':
        dispatch(sidebarToggled())
        return <UpdatePassword />
      case 'linked_devices':
        dispatch(sidebarToggled())
        return <LinkedDeivces />
      default:
        return <Dashboard />
    }
  }

  return <Layout>{renderSection(component)}</Layout>
}

export default HomePage
