import { render } from '@testing-library/react'

import Conditional from '../Conditional'

describe('Conditional', () => {
  it('should render children if renderIf is true', () => {
    const { getByText } = render(
      <Conditional renderIf>
        <span>Test</span>
      </Conditional>,
    )

    expect(getByText('Test')).toBeInTheDocument()
  })

  it('should not render children if renderIf is false', () => {
    const { queryByText } = render(
      <Conditional renderIf={false}>
        <span>Test</span>
      </Conditional>,
    )

    expect(queryByText('Test')).toBeNull()
  })
})
