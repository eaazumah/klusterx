import { ActionIcon, Container, Group, Header, Text } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import cx from 'classnames'
import React from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Conditional from '../../components/Conditional'
import useAppSettings from '../../hooks/useAppSettings'

const MainHeader: React.FC = () => {
  const navigate = useNavigate()
  const tableNavActive = useMatch('/table')
  const fixturesNavActive = useMatch('/fixtures')
  const { toggleTheme, theme } = useAppSettings()
  const teamFixturesNavActive = useMatch('/fixtures/:teamName')

  return (
    <Styled fixed height={56}>
      <Container size='lg'>
        <Group position='apart'>
          <Group className='inner' spacing='lg'>
            <Text className='brand' size='lg' weight={600} align='center' italic color='teal.7'>
              KlusterX
            </Text>
            <Group spacing='md'>
              <a
                onClick={() => navigate('/table')}
                className={cx('nav-item', {
                  'active-nav-item': tableNavActive,
                })}
              >
                <Text size='md' weight={600} align='center' color='teal.8'>
                  Table
                </Text>
              </a>
              <a
                onClick={() => navigate('/fixtures')}
                className={cx('nav-item', {
                  'active-nav-item': fixturesNavActive || teamFixturesNavActive,
                })}
              >
                <Text size='md' weight={600} align='center' color='teal.8'>
                  Fixtures
                </Text>
              </a>
            </Group>
          </Group>
          <Group spacing='md'>
            <Conditional renderIf={theme === 'light'}>
              <ActionIcon size='lg' variant='default' onClick={toggleTheme}>
                <IconMoon />
              </ActionIcon>
            </Conditional>
            <Conditional renderIf={theme === 'dark'}>
              <ActionIcon size='lg' variant='default' onClick={toggleTheme}>
                <IconSun />
              </ActionIcon>
            </Conditional>
          </Group>
        </Group>
      </Container>
    </Styled>
  )
}

const Styled = styled(Header)`
  .inner {
    height: 56px;
    align-items: center;
  }

  .nav-item {
    height: 55px;
    display: flex;
    cursor: pointer;
    padding-top: 3px;
    align-items: center;
    text-decoration: none;
    border: 3px solid transparent;
  }

  .nav-item:hover {
    border-bottom: 3px solid ${(props) => props.theme.colors?.teal?.[8]};
  }

  .active-nav-item {
    border-bottom: 3px solid ${(props) => props.theme.colors?.teal?.[8]};
  }
`

export default MainHeader
