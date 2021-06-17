import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/client/testing'
import About from './About'

describe('<About />', () => {
  test('it should mount', () => {
    const mocks = []
    render(<MockedProvider mocks={mocks} addTypename={false}>
      <About />
    </MockedProvider>)

    const about = screen.getByTestId('About')

    expect(about).toBeInTheDocument()
  })
})
