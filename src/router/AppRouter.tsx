import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './AppRoutes'

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default AppRouter
