import React, {ReactNode} from 'react'
import "./style.css"
interface ITab{
    tabClass:string;
    children:ReactNode;
}
const Tab = ({tabClass,children}: ITab) => {
  return (
    <div className={tabClass}>
      {children}
    </div>
  )
}

export default Tab
