import React from 'react'
import { Buttonn } from './buttonElements'
const Button = ({title, path}) => {
  return (
    <Buttonn to={path}>
        {title}
    </Buttonn>
  )
}

export default Button