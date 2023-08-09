import React , {ReactNode} from 'react'
import "./style.css"
import Tab from "../Tab"


interface ITabs{
    tabsClass:string;
    children:ReactNode;
}
const Tabs = ({tabsClass,children}: ITabs) => {
  return (
    <div className={tabsClass}>
        {children}
        <Tab tabClass='tab tab1'><span>All</span></Tab>
        <Tab tabClass='tab tab2'><span>My favorites</span></Tab>
        <Tab tabClass='tab tab3'><span>Popular</span></Tab>
    </div>
  )
}

export default Tabs


