import React from 'react'
import "./style.css"
import Tab from "../Tab"


const Tabs = () => {

  return (
    <div className='tabs_container'>
        <Tab label='All'></Tab>
        <Tab label='Favorites'></Tab>
        <Tab label='Popular'></Tab>
    </div>
  )
}

export default Tabs


