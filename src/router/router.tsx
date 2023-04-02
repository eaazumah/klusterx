import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Fixtures from '../fixtures/Fixtures'
import TeamFixtures from '../fixtures/TeamFixtures'
import MainLayout from '../layouts/MainLayout'
import Table from '../table/LeagueTable'
import NoMatch from './NoMatch'

export const getRoutes = (): RouteObject[] => [
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
      {
        path: '/fixtures',
        element: <Fixtures />,
      },
      {
        path: '/fixtures/:teamName',
        element: <TeamFixtures />,
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

const router = createBrowserRouter(getRoutes())

export default router
