import React, {ReactNode} from 'react'
import "./style.css"


interface ITitle{
    text?:string,
    children:ReactNode,
    customClass:string
}
const Title = ({text,children,customClass}: ITitle) => {
  return (
    <h1 className={customClass}>
      {text}
      {children}
    </h1>
  )
}

export default Title