import { format } from 'date-fns'
import { Fixture, Match } from '../../types/declarations'
import convertScoreToFixture from './convertScoreToFixture'

const useGenerateFixtures = (data: Match[]) => {
  const fixtures = [...data].reduce((acc, curr) => {
    const fixture = convertScoreToFixture(curr)
    return [...acc, fixture]
  }, [] as Fixture[])

  const sortedFixtures = fixtures.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  const groupedFixtures = sortedFixtures.reduce((acc, curr) => {
    const date = format(new Date(curr.date), 'EEEE dd MMMM yyyy')
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(curr)
    return acc
  }, {} as { [key: string]: Fixture[] })

  const fixtureList = Object.keys(groupedFixtures).map((date) => {
    return {
      date,
      fixtures: groupedFixtures[date],
    }
  })

  return fixtureList
}

export default useGenerateFixtures
