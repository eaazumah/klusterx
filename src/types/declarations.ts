import { MantineThemeOverride } from '@mantine/core'
import { PayloadAction } from '@reduxjs/toolkit'
import { AnyAction, CombinedState, Reducer } from 'redux'

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends MantineThemeOverride {}
}

export interface INotification {
  id: string
  title?: string
  message: string
  sticky?: boolean
  type: 'danger' | 'success' | 'warning' | 'info'
}

export interface ISettings {
  theme: 'light' | 'dark'
}

export type ISettingsAction = PayloadAction<Partial<ISettings>>

export interface IReduxSate {
  settings: ISettings
}

export type ICombinedState = CombinedState<IReduxSate> | undefined

export type IReducers = Reducer<CombinedState<IReduxSate>, AnyAction>

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

export interface Match {
  score: Record<string, number>
  date: string
}

export interface Team {
  name: string
  played: number
  won: number
  drawn: number
  lost: number
  gf: number
  ga: number
  gd: number
  points: number
  rank?: number
}

export interface Fixture {
  date: string
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  upComing: boolean
}

export interface FixturesByDate {
  date: string
  fixtures: Fixture[]
}
