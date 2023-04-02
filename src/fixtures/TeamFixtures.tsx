import { ActionIcon, Badge, Container, Group, Space } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import getData from '../data/data'
import FixturesByDateItem from './components/FixturesByDateItem'
import useFilterTeamFixtures from './hooks/useFilterTeamFixtures'
import useGenerateFixtures from './hooks/useGenerateFixtures'

const TeamFixtures: React.FC = () => {
  const data = getData()
  const params = useParams()
  const navigate = useNavigate()
  const fixturesByDate = useGenerateFixtures(data)
  const teamFixturesByDate = useFilterTeamFixtures(fixturesByDate, params.teamName ?? '')
  return (
    <Styled size='lg'>
      <Group>
        <ActionIcon color='green' variant='transparent' onClick={() => navigate(-1)}>
          <IconArrowLeft />
        </ActionIcon>
        <Badge variant='dot'>{params.teamName} Fixtures</Badge>
      </Group>
      <Space h='xl' />
      {teamFixturesByDate.map((fixturesByDate, index) => (
        <FixturesByDateItem fixturesByDate={fixturesByDate} key={index} />
      ))}
    </Styled>
  )
}

const Styled = styled(Container)`
  padding-top: 100px;
`

export default TeamFixtures
