import React, { ReactNode } from 'react'



interface ITitle {
  children: ReactNode,
  customClass: string
}
const Title = ({ children, customClass }: ITitle) => {
  return (
    <h1 className={customClass}>
      {children}
    </h1>
  )
}

export default Title