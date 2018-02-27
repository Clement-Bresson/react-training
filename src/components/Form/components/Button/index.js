import React from 'react'

const alert = () => window.alert('foo')

const Button = props => {
  const { children, form, type } = props
  return (
    <button
      className='foo'
      form={form}
      type={type}
      onClick={alert}
    >
      {children}
    </button>
  )
}

export default Button
