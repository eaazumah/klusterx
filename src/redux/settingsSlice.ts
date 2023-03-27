import { createSlice } from '@reduxjs/toolkit'
import { ISettings, ISettingsAction } from '../types/declarations'

const initialState: ISettings = { theme: 'light' }

export const slice = createSlice({
  initialState,
  name: 'settings',
  reducers: {
    update: (state: ISettings, action: ISettingsAction) => {
      return { ...state, ...action.payload }
    },
  },
})

export default slice.reducer
// Action creators are generated for each case reducer function
export const settingsActions = slice.actions
