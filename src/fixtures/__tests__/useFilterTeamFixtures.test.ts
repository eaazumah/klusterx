import { FixturesByDate } from '../../types/declarations'
import useFilterTeamFixtures from '../hooks/useFilterTeamFixtures'

describe('useFilterTeamFixtures', () => {
  it('should filter fixtures by team name', () => {
    const mockData = [
      {
        date: 'Wednesday 05 May 2021',
        fixtures: [
          {
            upComing: false,
            homeTeam: 'Team A',
            awayTeam: 'Team B',
            homeScore: 3,
            awayScore: 1,
            date: '2021-05-05T14:00:00.000Z',
          },
          {
            upComing: false,
            homeTeam: 'Team B',
            awayTeam: 'Team C',
            homeScore: 2,
            awayScore: 2,
            date: '2021-05-05T14:00:00.000Z',
          },
        ],
      },
    ]
    const expectedData = [
      {
        date: 'Wednesday 05 May 2021',
        fixtures: [
          {
            upComing: false,
            homeTeam: 'Team A',
            awayTeam: 'Team B',
            homeScore: 3,
            awayScore: 1,
            date: '2021-05-05T14:00:00.000Z',
          },
        ],
      },
    ]
    const result = useFilterTeamFixtures(mockData, 'Team A')
    expect(result).toEqual(expectedData)
  })

  it('should return an empty array if no fixtures match the team name', () => {
    const mockData = [
      {
        date: 'Wednesday 05 May 2021',
        fixtures: [
          {
            upComing: false,
            homeTeam: 'Team A',
            awayTeam: 'Team B',
            homeScore: 3,
            awayScore: 1,
            date: '2021-05-05T14:00:00.000Z',
          },
          {
            upComing: false,
            homeTeam: 'Team B',
            awayTeam: 'Team C',
            homeScore: 2,
            awayScore: 2,
            date: '2021-05-05T14:00:00.000Z',
          },
        ],
      },
    ]
    const expectedData = [] as FixturesByDate[]
    const result = useFilterTeamFixtures(mockData, 'Team D')
    expect(result).toEqual(expectedData)
  })

  test('should return an empty array if no fixtures are passed', () => {
    const mockData = [] as FixturesByDate[]
    const expectedData = [] as FixturesByDate[]
    const result = useFilterTeamFixtures(mockData, 'Team D')
    expect(result).toEqual(expectedData)
  })

  test('should return an empty array if no team name is passed', () => {
    const mockData = [
      {
        date: 'Wednesday 05 May 2021',
        fixtures: [
          {
            upComing: false,
            homeTeam: 'Team A',
            awayTeam: 'Team B',
            homeScore: 3,
            awayScore: 1,
            date: '2021-05-05T14:00:00.000Z',
          },
          {
            upComing: false,
            homeTeam: 'Team B',
            awayTeam: 'Team C',
            homeScore: 2,
            awayScore: 2,
            date: '2021-05-05T14:00:00.000Z',
          },
        ],
      },
    ]
    const expectedData = [] as FixturesByDate[]
    const result = useFilterTeamFixtures(mockData, '')
    expect(result).toEqual(expectedData)
  })

  test('should return an empty array if no fixtures or team name is passed', () => {
    const mockData = [] as FixturesByDate[]
    const expectedData = [] as FixturesByDate[]
    const result = useFilterTeamFixtures(mockData, '')
    expect(result).toEqual(expectedData)
  })
})
