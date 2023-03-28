import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import AppThemeProvider from '../providers/AppThemeProvider'
import { persistor, store } from '../redux/store'
import router from '../router/router'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppThemeProvider>
          <RouterProvider router={router} />
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
