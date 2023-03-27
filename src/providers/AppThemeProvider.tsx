import { MantineProvider, MantineThemeOverride, Paper, useMantineTheme } from '@mantine/core'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import useAppSettings from '../hooks/useAppSettings'

interface Themes {
  dark: MantineThemeOverride
  light: MantineThemeOverride
}

const themes: Themes = {
  light: {
    colorScheme: 'light',
    primaryColor: 'teal',
  },
  dark: {
    colorScheme: 'dark',
    primaryColor: 'teal',
  },
}

interface Props {
  children: React.ReactNode
}

const MantineThemeProvider: React.FC<Props> = ({ children }) => {
  const { theme } = useAppSettings()
  return <MantineProvider theme={themes[theme]}>{children}</MantineProvider>
}

const StyledThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = useMantineTheme()
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const AppThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <MantineThemeProvider>
      <StyledThemeProvider>
        <StyledPaper>{children}</StyledPaper>
      </StyledThemeProvider>
    </MantineThemeProvider>
  )
}

const StyledPaper = styled(Paper)`
  border-radius: 0px;
  background-color: ${({ theme }) => {
    return theme.colorScheme === 'dark' ? theme.colors?.dark?.[6] : theme.colors?.white
  }};
`

export default AppThemeProvider
