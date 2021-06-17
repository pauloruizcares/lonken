import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/client/testing'
import Principal from './Principal'

describe('<Principal />', () => {
  test('it should mount', () => {
    const mocks = []
    render(<MockedProvider mocks={mocks} addTypename={false}>
      <Principal />
    </MockedProvider>)
    const principal = screen.getByTestId('Principal')

    expect(principal).toBeInTheDocument()
  })
})
