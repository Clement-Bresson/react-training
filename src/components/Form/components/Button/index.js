import React from 'react'

const Button = props => {
  const { children, form, type } = props
  return (
    <button
      className='foo'
      form={form}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
