import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Layout>
  )
}

export default App
