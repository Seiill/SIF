import React from 'react'
import { Buttonn } from './buttonElements'
const Button = ({title, path, e}) => {
  return (
    <Buttonn to={path} onClick={e}>
        {title}
    </Buttonn>
  )
}

export default Button