// test main header component

import { render } from '../../utils/testUtils'

import MainHeader from '../components/MainHeader'

describe('MainHeader', () => {
  it('should render without crashing', () => {
    const { container } = render(<MainHeader />)
    expect(container).toBeInTheDocument()
  })
})
