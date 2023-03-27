import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import settings from './settingsSlice'

const persistConfig = {
  storage,
  key: 'root',
  version: 1,
  blacklist: ['notifications'],
}

const reducers = combineReducers({ settings })

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
