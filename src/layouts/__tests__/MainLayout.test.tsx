import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { render, screen } from '../../utils/testUtils'
import MainLayout from '../MainLayout'

describe('MainLayout', () => {
  const FakeComponent = () => <div>fake text</div>
  const routes = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <FakeComponent />,
        },
      ],
    },
  ]

  it('should render without crashing', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    })

    render(<RouterProvider router={router} />)

    expect(screen.getByText('fake text')).toBeInTheDocument()
  })
})
