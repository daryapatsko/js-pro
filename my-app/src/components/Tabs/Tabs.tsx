import React from 'react'
import "./style.css"
import Tab from "../Tab"


const Tabs = () => {
  return (
    <div className='tabs_container'>
        <Tab isOpen><span>All</span></Tab>
        <Tab><span>My favorites</span></Tab>
        <Tab><span>Popular</span></Tab>
    </div>
  )
}

export default Tabs


