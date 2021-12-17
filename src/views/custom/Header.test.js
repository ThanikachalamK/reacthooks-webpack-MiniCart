import React from 'react'
import { fireEvent, render, waitFor, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Provider } from 'react-redux'

import store from '../../store/store'
import Header from './Header'

afterEach(() => jest.clearAllMocks())

afterAll(() => {
  jest.useRealTimers()
})

test('Header label should be present', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  )
  const header = getByText(/space travel/i)
  expect(header).toHaveTextContent('Space Travel')
})

test('Search dropdown should be present', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  )
  const element = getByTestId('search-by-name')
  expect(element).toBeInTheDocument()
})