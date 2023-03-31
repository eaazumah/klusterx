import { Badge, Divider, Flex, Group, Space, Text } from '@mantine/core'
import { format } from 'date-fns'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Conditional from '../../components/Conditional'
import { Fixture } from '../../types/declarations'

type Props = {
  fixture: Fixture
}

const FixtureItem: React.FC<Props> = ({ fixture }) => {
  const navigate = useNavigate()
  return (
    <Styled>
      <Flex className='fixture'>
        <Group spacing={5}>
          <Text color='green' component='a' href={`/fixtures/${fixture.homeTeam}`}>
            {fixture.homeTeam}
          </Text>
          <Text italic>vs</Text>
          <Text color='green' component='a' href={`/fixtures/${fixture.awayTeam}`}>
            {fixture.awayTeam}
          </Text>
        </Group>
        <Space w={20} />
        <Conditional renderIf={!fixture.upComing}>
          <Group spacing={5}>
            <Text>{fixture.homeScore}</Text>
            <Text>-</Text>
            <Text>{fixture.awayScore}</Text>
          </Group>
        </Conditional>
        <Conditional renderIf={fixture.upComing}>
          <Badge className='badge'>Upcoming</Badge>
        </Conditional>
        <Space w={20} />
        <Text>{format(new Date(fixture.date), 'HH:mm')}</Text>
      </Flex>
      <Divider />
    </Styled>
  )
}

const Styled = styled.div`
  .fixture {
    margin: 15px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .badge {
    text-transform: none;
  }
`

export default FixtureItem
