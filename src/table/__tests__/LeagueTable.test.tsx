import { render } from '../../utils/testUtils'
import LeagueTable from '../LeagueTable'

jest.mock('../../data/data.ts', () => ({
  __esModule: true,
  default: () => [
    { score: { 'Team A': 3, 'Team B': 1 }, date: '2021-05-05T14:00:00' },
    { score: { 'Team B': 2, 'Team C': 2 }, date: '2021-05-05T14:00:00' },
  ],
}))

describe('LeagueTable', () => {
  test('should render table ', () => {
    const { asFragment } = render(<LeagueTable />)
    expect(asFragment).toMatchSnapshot()
  })

  test('should render table with data ', () => {
    const { container } = render(<LeagueTable />)
    expect(container).toMatchSnapshot()

    const table = container.querySelector('table')
    expect(table).toBeInTheDocument()

    const tableRows = table?.querySelectorAll('tr')
    expect(tableRows).toHaveLength(4)

    const tableHeaders = table?.querySelectorAll('th')
    expect(tableHeaders).toHaveLength(10)

    const tableBody = table?.querySelector('tbody')
    expect(tableBody).toBeInTheDocument()

    const tableBodyRows = tableBody?.querySelectorAll('tr')
    expect(tableBodyRows).toHaveLength(3)

    const tableBodyCells = tableBody?.querySelectorAll('td')
    expect(tableBodyCells).toHaveLength(30)
  })
})
