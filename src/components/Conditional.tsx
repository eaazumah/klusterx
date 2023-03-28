import React from 'react'

type Props = {
  renderIf: any
  children: React.ReactNode
}

const Conditional: React.FC<Props> = (props) => {
  const { renderIf, children } = props
  return <>{Boolean(renderIf) && children}</>
}

export default Conditional
