import { render, screen } from '../../utils/testUtils'
import FixturesByDateItem from '../components/FixturesByDateItem'

describe('FixturesByDateItem', () => {
  test('should render fixtures by date item ', () => {
    const fixturesByDate = {
      date: '2021-09-11T12:30:00+00:00',
      fixtures: [
        {
          date: '2021-09-11T12:30:00+00:00',
          homeTeam: 'Team A',
          awayTeam: 'Team B',
          homeScore: 1,
          awayScore: 0,
          upComing: false,
        },
      ],
    }

    const { asFragment } = render(<FixturesByDateItem fixturesByDate={fixturesByDate} />)
    expect(asFragment).toMatchSnapshot()
  })

  test('should render fixtures by date item with data', () => {
    const fixturesByDate = {
      date: '11 September 2021',
      fixtures: [
        {
          date: '2021-09-11T12:30:00+00:00',
          homeTeam: 'Team A',
          awayTeam: 'Team B',
          homeScore: 1,
          awayScore: 0,
          upComing: false,
        },
      ],
    }

    const { container } = render(<FixturesByDateItem fixturesByDate={fixturesByDate} />)
    expect(container).toMatchSnapshot()

    expect(screen.getByText('11 September 2021')).toBeInTheDocument()
  })
})
