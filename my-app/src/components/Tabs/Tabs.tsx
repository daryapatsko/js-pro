import React from 'react'
import "./style.css"
import Tab from "../Tab"


interface ITabs{
    tabsClass:string;
}
const Tabs = ({tabsClass}: ITabs) => {
  return (
    <div className={tabsClass}>
        <Tab tabClass='tab tab1'><span>All</span></Tab>
        <Tab tabClass='tab tab2'><span>My favorites</span></Tab>
        <Tab tabClass='tab tab3'><span>Popular</span></Tab>
    </div>
  )
}

export default Tabs


