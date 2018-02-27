import React, { Component } from 'react'

import Button from './components/Button'
import Title from './components/Title'
import Input from './components/Input'

class Form extends Component {

  handleInputChange = (name, value) => {
    console.log(name, value)
  }

  render() {
    return (
      <form id="foo">
        Form
        <Title>Some title</Title>
        <Input onChange={this.handleInputChange} type="text" name="username" />
        <Input onChange={this.handleInputChange} type="password" name="password" />
        <Button form="foo" type="button">
          Button
        </Button>
      </form>
    )
  }
}

export default Form
