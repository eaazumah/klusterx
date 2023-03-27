import { PayloadAction } from '@reduxjs/toolkit'
import { AnyAction, CombinedState, Reducer } from 'redux'

// import { MantineThemeOverride } from '@mantine/core'

import 'styled-components'

// declare module 'styled-components' {
//   export interface DefaultTheme extends MantineThemeOverride {}
// }

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
