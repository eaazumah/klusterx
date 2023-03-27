import { useDispatch, useSelector } from 'react-redux'
import { settingsActions } from '../redux/settingsSlice'
import { IReduxSate } from '../types/declarations'

const selectSettings = (state: IReduxSate) => {
  return state.settings
}

const useAppSettings = () => {
  const dispatch = useDispatch()
  const settings = useSelector(selectSettings)

  const toggleTheme = () => {
    if (settings.theme === 'light') {
      dispatch(settingsActions.update({ ...settings, theme: 'dark' }))
    } else {
      dispatch(settingsActions.update({ ...settings, theme: 'light' }))
    }
  }

  return { ...settings, toggleTheme }
}

export default useAppSettings
