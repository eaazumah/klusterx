import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { render, screen } from '../../utils/testUtils'
import { routes } from '../router'

describe('Router', () => {
  test('should render index page ', () => {
    const router = createMemoryRouter(routes(), {
      initialEntries: ['/'],
    })
    render(<RouterProvider router={router} />)
    expect(screen.getByText('League Table')).toBeInTheDocument()
  })

  test('should render table page ', () => {
    const router = createMemoryRouter(routes(), {
      initialEntries: ['/table'],
    })
    render(<RouterProvider router={router} />)
    expect(screen.getByText('League Table')).toBeInTheDocument()
  })

  test('should render 404 page ', () => {
    const router = createMemoryRouter(routes(), {
      initialEntries: ['/404'],
    })
    render(<RouterProvider router={router} />)
    expect(screen.getByText('404')).toBeInTheDocument()
  })
})
