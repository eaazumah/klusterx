// test settings slice

import { ISettings, ISettingsAction } from '../../types/declarations'
import settingsSlice, { settingsActions } from '../settingsSlice'

describe('settings slice', () => {
  it('should return the initial state', () => {
    const initialState: ISettings = {
      theme: 'light',
    }
    expect(settingsSlice(undefined, {} as ISettingsAction)).toEqual(initialState)
  })

  it('should handle toggleDarkMode', () => {
    const previousState: ISettings = {
      theme: 'light',
    }
    expect(settingsSlice(previousState, settingsActions.update({ theme: 'dark' }))).toEqual({
      theme: 'dark',
    })
  })
  it('should handle toggleDarkMode', () => {
    const previousState: ISettings = {
      theme: 'dark',
    }
    expect(settingsSlice(previousState, settingsActions.update({ theme: 'light' }))).toEqual({
      theme: 'light',
    })
  })
})
