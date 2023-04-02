import { render, screen } from '../../utils/testUtils'
import FixtureItem from '../components/FixtureItem'

describe('FixtureItem', () => {
  test('should render fixture item ', () => {
    const fixture = {
      date: '2021-09-11T12:30:00+00:00',
      homeTeam: 'Team A',
      awayTeam: 'Team B',
      homeScore: 1,
      awayScore: 0,
      upComing: false,
    }

    const { asFragment } = render(<FixtureItem fixture={fixture} />)
    expect(asFragment).toMatchSnapshot()
  })

  test('should render fixture item with data', () => {
    const fixture = {
      date: '2021-09-11T12:30:00+00:00',
      homeTeam: 'Team A',
      awayTeam: 'Team B',
      homeScore: 1,
      awayScore: 0,
      upComing: false,
    }

    const { container } = render(<FixtureItem fixture={fixture} />)
    expect(container).toMatchSnapshot()

    const fixtureItem = container.querySelector('.fixture')
    expect(fixtureItem).toBeInTheDocument()

    const fixtureItemText = fixtureItem?.querySelectorAll('a')
    expect(fixtureItemText).toHaveLength(2)

    const fixtureItemTextHome = fixtureItem?.querySelectorAll('a')[0]
    expect(fixtureItemTextHome).toHaveTextContent('Team A')

    const fixtureItemTextAway = fixtureItem?.querySelectorAll('a')[1]
    expect(fixtureItemTextAway).toHaveTextContent('Team B')

    const fixtureItemScore = fixtureItem?.querySelectorAll('div')[1]
    expect(fixtureItemScore).toHaveTextContent('vs')

    const fixtureItemDate = fixtureItem?.querySelectorAll('div')[3]
    expect(fixtureItemDate).toHaveTextContent('1 - 0')
  })

  test('should render fixture item with data and up coming', () => {
    const fixture = {
      date: '2021-09-11T12:30:00+00:00',
      homeTeam: 'Team A',
      awayTeam: 'Team B',
      homeScore: null,
      awayScore: null,
      upComing: true,
    }

    const { container } = render(<FixtureItem fixture={fixture} />)
    expect(container).toMatchSnapshot()

    const fixtureItem = container.querySelector('.fixture')
    expect(fixtureItem).toBeInTheDocument()

    expect(screen.getByText('Upcoming')).toBeInTheDocument()
  })
})
