import Input from './'
import React from 'react'
import { shallow } from 'enzyme'

describe('Input', () => {
  it('renders correctly', () => {
    const component = shallow(<Input />)
    expect(component).toMatchSnapshot()
  })
})
