import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/client/testing'
import Home from './Home'


describe('<Home />', () => {
  test('it should mount', () => {
    const mocks = []
    render(<MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>)

    const home = screen.getByTestId('Home')

    expect(home).toBeInTheDocument()
  })
})
