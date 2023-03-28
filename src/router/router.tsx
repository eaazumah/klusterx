import { createBrowserRouter, RouteObject } from 'react-router-dom'
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
      {
        path: '/table',
        element: <Table />,
      },
    ],
  },
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
]

const router = createBrowserRouter(routes())

export default router
