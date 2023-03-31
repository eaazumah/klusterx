import { Divider, Space, Title } from '@mantine/core'
import React from 'react'
import styled from 'styled-components'
import { FixturesByDate } from '../../types/declarations'
import FixtureItem from './FixtureItem'

type Props = {
  fixtureByDate: FixturesByDate
}

const FixturesByDateItem: React.FC<Props> = ({ fixtureByDate }) => {
  return (
    <Styled>
      <Title italic>{fixtureByDate.date}</Title>
      <Divider />
      {fixtureByDate.fixtures.map((fixture, index) => (
        <FixtureItem fixture={fixture} key={index} />
      ))}
      <Space h='xl' />
    </Styled>
  )
}

const Styled = styled.div``

export default FixturesByDateItem
