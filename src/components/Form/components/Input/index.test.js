import Input from './'
import React from 'react'
import { shallow } from 'enzyme'

let component
let onChange

describe('Input', () => {

  beforeEach(() => {
    onChange = jest.fn()
    component = shallow(<Input name='bar' onChange={onChange} />)
  })

  afterEach(() => {
    component.unmount()
  })

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('onChange', () => {
    const input = component.find('input')
    expect(input).toBeDefined()
    input.simulate('change', { target: { value: 'foo' } })
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith('bar', 'foo')
  })
})
