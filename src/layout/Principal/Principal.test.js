import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Principal from './Principal'

describe('<Principal />', () => {
  test('it should mount', () => {
    render(<Principal />)

    const principal = screen.getByTestId('Principal')

    expect(principal).toBeInTheDocument()
  })
})
