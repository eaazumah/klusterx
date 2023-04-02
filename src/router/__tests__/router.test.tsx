import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { render, screen } from '../../utils/testUtils'
import { getRoutes } from '../router'

describe('Router', () => {
  test('should render index page ', () => {
    const router = createMemoryRouter(getRoutes(), {
      initialEntries: ['/'],
    })
    render(<RouterProvider router={router} />)
    expect(screen.getByText('League Table')).toBeInTheDocument()
  })

  test('should render table page ', () => {
    const router = createMemoryRouter(getRoutes(), {
      initialEntries: ['/table'],
    })
    render(<RouterProvider router={router} />)
    expect(screen.getByText('League Table')).toBeInTheDocument()
  })

  test('should render 404 page ', () => {
    const router = createMemoryRouter(getRoutes(), {
      initialEntries: ['/404'],
    })
    render(<RouterProvider router={router} />)
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  test('should render league fixtures page ', () => {
    const router = createMemoryRouter(getRoutes(), {
      initialEntries: ['/fixtures'],
    })
    render(<RouterProvider router={router} />)
    expect(screen.getByText('League Fixtures')).toBeInTheDocument()
  })

  test('should render team fixtures page ', () => {
    const router = createMemoryRouter(getRoutes(), {
      initialEntries: ['/fixtures/Chelsea'],
    })
    render(<RouterProvider router={router} />)
    expect(screen.getByText('Chelsea Fixtures')).toBeInTheDocument()
  })
})
