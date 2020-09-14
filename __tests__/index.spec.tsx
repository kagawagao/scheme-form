import React from 'react'
import ReactDOM from 'react-dom'
import SchemaForm from '../src'

describe('Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SchemaForm fieldItems={[]} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
