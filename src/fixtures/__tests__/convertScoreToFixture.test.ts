// generate tests for the hook

import convertScoreToFixture from '../hooks/convertScoreToFixture'

describe('convertScoreToFixture', () => {
  it('should return the correct fixture with up coming false', () => {
    const scoreObj = {
      score: {
        'Manchester United': 1,
        'Leicester City': 2,
      },
      date: '2021-05-04T14:00:00',
    }
    const fixture = convertScoreToFixture(scoreObj)
    expect(fixture).toEqual({
      upComing: false,
      homeTeam: 'Manchester United',
      awayTeam: 'Leicester City',
      homeScore: 1,
      awayScore: 2,
      date: '2021-05-04T14:00:00.000Z',
    })
  })
  it('should return the correct fixture with up coming true', () => {
    const scoreObj = {
      score: { 'Manchester United': null, Liverpool: null },
      date: '2021-05-09T11:00:00',
    }
    const fixture = convertScoreToFixture(scoreObj)
    expect(fixture).toEqual({
      upComing: true,
      homeTeam: 'Manchester United',
      awayTeam: 'Liverpool',
      homeScore: null,
      awayScore: null,
      date: '2021-05-09T11:00:00.000Z',
    })
  })
})
