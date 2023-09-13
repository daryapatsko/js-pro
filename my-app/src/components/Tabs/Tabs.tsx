import React from 'react'

import Tab from "../Tab"

import "./style.css"


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


