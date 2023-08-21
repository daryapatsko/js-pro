import React, {ReactNode} from 'react'
import "./style.css"
interface ITab{
    children:ReactNode;
    isOpen?:boolean;
}
const Tab = ({children,isOpen}: ITab) => {
  return (
    <div className={isOpen ? "tab__open" : "tab"}>
      {children}
    </div>
  )
}

export default Tab
