import { configureStore } from '@reduxjs/toolkit'
import '@testing-library/jest-dom'
import { render as rtlRender, renderHook as rtlRenderHook } from '@testing-library/react'
import 'jest-styled-components'
import React from 'react'
import { Provider } from 'react-redux'
import settings from '../redux/settingsSlice'
import { IReduxSate } from '../types/declarations'

interface Options {
  store?: any
  preloadedState?: Partial<IReduxSate>
}

interface OptionsWithRouter {
  store?: any
  preloadedState?: Partial<IReduxSate>
}

const render = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      preloadedState,
      reducer: { settings },
    }),
    ...options
  }: Options = {},
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

const renderWithRouter = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      preloadedState,
      reducer: { settings },
    }),
    ...options
  }: OptionsWithRouter = {},
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

const renderHook = <TProps, TResult>(
  callback: (props: TProps) => TResult,
  {
    mocks = [],
    preloadedState,
    store = configureStore({
      preloadedState,
      reducer: { settings },
    }),
    ...options
  }: any = {},
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRenderHook(callback, {
    ...options,
    wrapper: Wrapper,
  })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render, renderHook, renderWithRouter }
