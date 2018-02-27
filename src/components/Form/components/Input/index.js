import React, { Component } from 'react'
import { PropTypes as T } from 'prop-types'

class Input extends Component {

  state = {
    value: ''
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
      <input
        name={name}
        onChange={this.handleChange}
        type={type}
        value={value}
      />
    )
  }
}

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  name: T.string.isRequired,
  onChange: T.func.isRequired,
  type: T.string,
  value: T.string
}

export default Input
