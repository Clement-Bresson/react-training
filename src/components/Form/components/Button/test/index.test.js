import Button from '../'
import React from 'react'
import { shallow } from 'enzyme'

describe('Button', () => {
  it('renders correctly', () => {
    const component = shallow(<Button />)
    expect(component).toMatchSnapshot()
  })
})
