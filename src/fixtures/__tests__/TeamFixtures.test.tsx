import { render, screen } from '../../utils/testUtils'

import TeamFixtures from '../TeamFixtures'

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
  useParams: () => ({ teamName: 'Team A' }),
}))

describe('TeamFixtures', () => {
  test('should render team fixtures', () => {
    const { asFragment } = render(<TeamFixtures />)
    expect(asFragment).toMatchSnapshot()
  })

  test('should render team fixtures with data', () => {
    const { container } = render(<TeamFixtures />)
    expect(container).toMatchSnapshot()

    expect(screen.getByText('Team A Fixtures')).toBeInTheDocument()
  })
})
