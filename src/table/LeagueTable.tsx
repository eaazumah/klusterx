import { Badge, Container, Space, Table, Text } from '@mantine/core'
import React from 'react'
import styled from 'styled-components'
import data from '../data/data'
import useGenerateLeagueTable from './hooks/useGenerateLeagueTable'

const LeagueTable: React.FC = () => {
  const tableData = useGenerateLeagueTable(data)
  return (
    <Styled size='lg'>
      <Badge variant='dot'>League Table</Badge>
      <Space h='xl' />
      <Table striped highlightOnHover horizontalSpacing='xl' verticalSpacing='sm'>
        <thead>
          <tr>
            <th>Position</th>
            <th>Club</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((team, index) => (
            <tr key={index}>
              <td>{team.rank}</td>
              <td>
                <Text color='green' component='a' href={`/fixtures/${team.name}`}>
                  {team.name}
                </Text>
              </td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.drawn}</td>
              <td>{team.lost}</td>
              <td>{team.gf}</td>
              <td>{team.ga}</td>
              <td>{team.gd}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Styled>
  )
}

const Styled = styled(Container)`
  padding-top: 100px;
`

export default LeagueTable
