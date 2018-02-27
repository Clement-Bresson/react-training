import React, { Component } from 'react'

import Button from './components/Button'
import Title from './components/Title'
import Input from './components/Input'

class Form extends Component {
  render() {
    return (
      <form id="foo">
        Form
        <Title>Some title</Title>
        <Input type="text" name="username" />
        <Input type="password" name="password" />
        <Button form="foo" type="button">
          Button
        </Button>
      </form>
    )
  }
}

export default Form
