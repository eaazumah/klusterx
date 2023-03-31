import { Container, MantineProvider, MantineThemeOverride, useMantineTheme } from '@mantine/core'
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
  return (
    <MantineProvider theme={themes[theme]} withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  )
}

const StyledThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = useMantineTheme()
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const AppThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <MantineThemeProvider>
      <StyledThemeProvider>
        <Styled fluid>{children}</Styled>
      </StyledThemeProvider>
    </MantineThemeProvider>
  )
}

const Styled = styled(Container)`
  height: 100vh;
  overflow: auto;
  padding: 0px !important;
  background-color: ${({ theme }) => {
    return theme.colorScheme === 'dark' ? theme.colors?.dark?.[6] : theme.colors?.white
  }};
`

export default AppThemeProvider
