import { ActionIcon, Badge, Container, Group, Space } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import getData from '../data/data'
import FixturesByDateItem from './components/FixturesByDateItem'
import useGenerateFixtures from './hooks/useGenerateFixtures'

const Fixtures: React.FC = () => {
  const data = getData()
  const navigate = useNavigate()
  const fixturesByDate = useGenerateFixtures(data)
  return (
    <Styled size='lg'>
      <Group>
        <ActionIcon color='green' variant='transparent' onClick={() => navigate(-1)}>
          <IconArrowLeft />
        </ActionIcon>
        <Badge variant='dot'>League Fixtures</Badge>
      </Group>
      <Space h='xl' />
      {fixturesByDate.map((fixturesByDate, index) => (
        <FixturesByDateItem fixturesByDate={fixturesByDate} key={index} />
      ))}
    </Styled>
  )
}

const Styled = styled(Container)`
  padding-top: 100px;
`

export default Fixtures
