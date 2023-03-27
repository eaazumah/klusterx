import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppThemeProvider from '../providers/AppThemeProvider'
import { persistor, store } from '../redux/store'
import AppRouter from '../router/AppRouter'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppThemeProvider>
          <AppRouter />
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
