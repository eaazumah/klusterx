import { Match, Team } from '../../types/declarations'

const useGenerateLeagueTable = (data: Match[]) => {
  const teams = data.reduce((acc, match) => {
    const { score } = match
    const [homeTeam, awayTeam] = Object.keys(score)

    // Initialize the team objects
    if (!acc[homeTeam]) {
      acc[homeTeam] = {
        name: homeTeam,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
      }
    }
    if (!acc[awayTeam]) {
      acc[awayTeam] = {
        name: awayTeam,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
      }
    }

    // Update the teams' stats based on the match result

    const homeScore = score[homeTeam]
    const awayScore = score[awayTeam]

    if (homeScore === null || awayScore === null) return acc

    acc[homeTeam].played++
    acc[awayTeam].played++

    if (homeScore > awayScore) {
      acc[homeTeam].won++
      acc[awayTeam].lost++
      acc[homeTeam].points += 3
    } else if (homeScore < awayScore) {
      acc[homeTeam].lost++
      acc[awayTeam].won++
      acc[awayTeam].points += 3
    } else {
      acc[homeTeam].drawn++
      acc[awayTeam].drawn++
      acc[homeTeam].points++
      acc[awayTeam].points++
    }

    acc[homeTeam].gf += homeScore
    acc[homeTeam].ga += awayScore
    acc[awayTeam].gf += awayScore
    acc[awayTeam].ga += homeScore

    acc[homeTeam].gd = acc[homeTeam].gf - acc[homeTeam].ga
    acc[awayTeam].gd = acc[awayTeam].gf - acc[awayTeam].ga

    return acc
  }, {} as Record<string, Team>)

  // Convert the teams object into an array and sort it by points, then goal difference, then goals scored
  const table: Team[] = Object.values(teams).sort((a: Team, b: Team) => {
    if (a.points !== b.points) {
      return b.points - a.points
    }
    if (a.gd !== b.gd) {
      return b.gd - a.gd
    }
    return b.gf - a.gf
  })

  // Add the rank property to each team
  table.forEach((team: Team, index: number) => {
    team.rank = index + 1
  })

  return table
}

export default useGenerateLeagueTable
