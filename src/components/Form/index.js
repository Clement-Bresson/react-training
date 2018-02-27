import React, { Component } from 'react'

import Button from './components/Button'
import Title from './components/Title'
import Input from './components/Input'

class Form extends Component {

  state = {
    username: '',
    password: ''
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="foo">
        Form
        <Title>Some title</Title>
        <Input onChange={this.handleInputChange} type="text" name="username" />
        <Input onChange={this.handleInputChange} type="password" name="password" />
        <Button form="foo" type="submit">
          Button
        </Button>
      </form>
    )
  }
}

export default Form
