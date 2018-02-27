import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = event => {
    const { onChange, name } = this.props
    const value = event.target.value
    this.setState({ value })
    onChange && onChange(name, value)
  }

  render() {
    const { name, type } = this.props
    const { value } = this.state
    return (
      <div>
        <p>{value}</p>
        <input
          name={name}
          onChange={this.handleChange}
          type={type}
          value={value}
        />
      </div>
    )
  }
}

export default Input
