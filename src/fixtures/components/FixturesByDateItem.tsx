import { Divider, Space, Title } from '@mantine/core'
import React from 'react'
import styled from 'styled-components'
import { FixturesByDate } from '../../types/declarations'
import FixtureItem from './FixtureItem'

type Props = {
  fixturesByDate: FixturesByDate
}

const FixturesByDateItem: React.FC<Props> = ({ fixturesByDate }) => {
  return (
    <Styled>
      <Title italic>{fixturesByDate.date}</Title>
      <Divider />
      {fixturesByDate.fixtures.map((fixture, index) => (
        <FixtureItem fixture={fixture} key={index} />
      ))}
      <Space h='xl' />
    </Styled>
  )
}

const Styled = styled.div``

export default FixturesByDateItem
