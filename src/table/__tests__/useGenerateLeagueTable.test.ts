import { Match, Team } from '../../types/declarations'
import useGenerateLeagueTable from '../hooks/useGenerateLeagueTable'

describe('useGenerateLeagueTable', () => {
  const mockData = [
    { score: { 'Team A': 3, 'Team B': 1 }, date: '2021-05-05T14:00:00' },
    { score: { 'Team B': 2, 'Team C': 2 }, date: '2021-05-05T14:00:00' },
  ] as Match[]
  it('should generate the correct league table', () => {
    const expectedTable = [
      {
        name: 'Team A',
        played: 1,
        won: 1,
        drawn: 0,
        lost: 0,
        gf: 3,
        ga: 1,
        gd: 2,
        points: 3,
        rank: 1,
      },
      {
        name: 'Team C',
        played: 1,
        won: 0,
        drawn: 1,
        lost: 0,
        gf: 2,
        ga: 2,
        gd: 0,
        points: 1,
        rank: 2,
      },
      {
        name: 'Team B',
        played: 2,
        won: 0,
        drawn: 1,
        lost: 1,
        gf: 3,
        ga: 5,
        gd: -2,
        points: 1,
        rank: 3,
      },
    ] as Team[]
    const result = useGenerateLeagueTable(mockData)
    expect(result).toEqual(expectedTable)
  })

  it('should handle null scores correctly', () => {
    const mockData = [
      { score: { 'Team A': 3, 'Team B': 1 }, date: '2021-05-05T14:00:00' },
      { score: { 'Team B': 2, 'Team C': 2 }, date: '2021-05-05T14:00:00' },
      { score: { 'Team A': null, 'Team B': null }, date: '2021-05-05T14:00:00' },
    ] as Match[]
    const expectedTable = [
      {
        name: 'Team A',
        played: 1,
        won: 1,
        drawn: 0,
        lost: 0,
        gf: 3,
        ga: 1,
        gd: 2,
        points: 3,
        rank: 1,
      },
      {
        name: 'Team C',
        played: 1,
        won: 0,
        drawn: 1,
        lost: 0,
        gf: 2,
        ga: 2,
        gd: 0,
        points: 1,
        rank: 2,
      },
      {
        name: 'Team B',
        played: 2,
        won: 0,
        drawn: 1,
        lost: 1,
        gf: 3,
        ga: 5,
        gd: -2,
        points: 1,
        rank: 3,
      },
    ] as Team[]
    const result = useGenerateLeagueTable(mockData)
    expect(result).toEqual(expectedTable)
  })
})
