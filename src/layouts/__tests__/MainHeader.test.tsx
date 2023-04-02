import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { getRoutes } from '../../router/router'
import { fireEvent, render, screen } from '../../utils/testUtils'

import MainHeader from '../components/MainHeader'

describe('MainHeader', () => {
  it('should render without crashing', () => {
    const router = createMemoryRouter(getRoutes(), {
      initialEntries: ['/'],
    })
    render(<RouterProvider router={router} />)
    expect(MainHeader).toBeTruthy()
    expect(screen.getByText('KlusterX')).toBeInTheDocument()
    expect(screen.getByText('Table')).toBeInTheDocument()
    expect(screen.getByText('Fixtures')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Table'))
    expect(screen.getByText('League Table')).toBeInTheDocument()
    expect(screen.getByText('Table').parentElement).toHaveClass('active-nav-item')

    fireEvent.click(screen.getByText('Fixtures'))
    expect(screen.getByText('League Fixtures')).toBeInTheDocument()
    expect(screen.getByText('Fixtures').parentElement).toHaveClass('active-nav-item')
  })
})
