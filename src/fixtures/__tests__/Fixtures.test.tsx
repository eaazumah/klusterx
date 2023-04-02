import { render, screen } from '../../utils/testUtils'
import Fixtures from '../Fixtures'

jest.mock('../../data/data.ts', () => ({
  __esModule: true,
  default: () => [
    { score: { 'Team A': 3, 'Team B': 1 }, date: '2021-05-05T14:00:00' },
    { score: { 'Team B': 2, 'Team C': 2 }, date: '2021-05-05T14:00:00' },
  ],
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

describe('Fixtures', () => {
  test('should render fixtures', () => {
    const { asFragment } = render(<Fixtures />)
    expect(asFragment).toMatchSnapshot()
  })

  test('should render fixtures with data', () => {
    const { container } = render(<Fixtures />)
    expect(container).toMatchSnapshot()

    expect(screen.getByText('League Fixtures')).toBeInTheDocument()
  })
})
