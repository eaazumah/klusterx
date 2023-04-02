// write tests for useGenerateFixtures

import { Match } from '../../types/declarations'
import useGenerateFixtures from '../hooks/useGenerateFixtures'

const mockData = [
  { score: { 'Team A': 3, 'Team B': 1 }, date: '2021-05-05T14:00:00' },
  { score: { 'Team B': 2, 'Team C': 2 }, date: '2021-05-05T14:00:00' },
] as Match[]

describe('useGenerateFixtures', () => {
  it('should generate fixtures', () => {
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

    const result = useGenerateFixtures(mockData)
    expect(result).toEqual(expectedData)
  })

  it('should return an empty array if no fixtures are passed', () => {
    const expectedData = [] as Match[]
    const result = useGenerateFixtures([])
    expect(result).toEqual(expectedData)
  })
})
