import { render } from '../../utils/testUtils'
import LeagueTable from '../LeagueTable'

describe('LeagueTable', () => {
  test('should render table ', () => {
    const { container } = render(<LeagueTable />)
    expect(container).toMatchSnapshot()
  })
})
