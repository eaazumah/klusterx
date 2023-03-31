import { Fixture, FixturesByDate } from '../../types/declarations'

const useFilterTeamFixtures = (fixtures: FixturesByDate[], teamName: string) => {
  const filteredFixturesByDate = fixtures.reduce(
    (acc: FixturesByDate[], fixture: FixturesByDate) => {
      const filteredFixture = fixture.fixtures.filter(
        (fixture: Fixture) => fixture.homeTeam === teamName || fixture.awayTeam === teamName,
      )
      if (filteredFixture.length > 0) {
        return [...acc, { date: fixture.date, fixtures: filteredFixture }]
      }
      return acc
    },
    [] as FixturesByDate[],
  )

  return filteredFixturesByDate
}

export default useFilterTeamFixtures
