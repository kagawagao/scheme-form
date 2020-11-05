import React from 'react'
import ReactDOM from 'react-dom'
import SchemeForm from '../src'

describe('Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SchemeForm fieldItems={[]} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
