import React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Table from '../table/Table'
import NoMatch from './NoMatch'

const routes = (): RouteObject[] => [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Table />,
      },
    ],
  },
  {
    path: '*',
    element: <NoMatch />,
  },
]

const AppRoutes: React.FC = () => {
  const routing = useRoutes(routes())
  return <>{routing}</>
}

export default AppRoutes
