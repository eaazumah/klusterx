import { Match, Team } from '../../types/declarations'

const useGenerateLeagueTable = (data: Match[]) => {
  const teams: Record<string, Team> = {}

  data.forEach((match: Match) => {
    const { score } = match
    const [homeTeam, awayTeam] = Object.keys(score)

    // Initialize the team objects
    if (!teams[homeTeam]) {
      teams[homeTeam] = {
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
    if (!teams[awayTeam]) {
      teams[awayTeam] = {
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
    teams[homeTeam].played++
    teams[awayTeam].played++

    if (score[homeTeam] > score[awayTeam]) {
      teams[homeTeam].won++
      teams[awayTeam].lost++
      teams[homeTeam].points += 3
    } else if (score[homeTeam] < score[awayTeam]) {
      teams[homeTeam].lost++
      teams[awayTeam].won++
      teams[awayTeam].points += 3
    } else {
      teams[homeTeam].drawn++
      teams[awayTeam].drawn++
      teams[homeTeam].points++
      teams[awayTeam].points++
    }

    teams[homeTeam].gf += score[homeTeam] || 0
    teams[homeTeam].ga += score[awayTeam] || 0
    teams[awayTeam].gf += score[awayTeam] || 0
    teams[awayTeam].ga += score[homeTeam] || 0

    teams[homeTeam].gd = teams[homeTeam].gf - teams[homeTeam].ga
    teams[awayTeam].gd = teams[awayTeam].gf - teams[awayTeam].ga
  })

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
