import { Match } from '../../types/declarations'

const convertScoreToFixture = (scoreObj: Match) => {
  const currentDate = new Date('2021-05-05T14:00:00')

  const teams = Object.keys(scoreObj.score)
  const homeTeam = teams[0]
  const awayTeam = teams[1]
  const homeScore = scoreObj.score[homeTeam]
  const awayScore = scoreObj.score[awayTeam]
  const date = new Date(scoreObj.date)
  const upComing = date.getTime() > currentDate.getTime()

  return {
    upComing,
    homeTeam: homeTeam,
    awayTeam: awayTeam,
    homeScore: homeScore,
    awayScore: awayScore,
    date: date.toISOString(),
  }
}

export default convertScoreToFixture
