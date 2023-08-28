import React from 'react'
import Header from '../Header/Header'
import Title from '../Title/Title'
import { StyledButtonHome } from './styled'
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <div className='wrapper'>
      <Header>Artem Markin</Header>
      <Title customClass='title__homePage'> Home Page</Title>
      <StyledButtonHome><Link to='/sign_in'>Sign In</Link></StyledButtonHome>
      <footer>
        <div>2022</div>
        <div>All rights reserved</div>
      </footer>
    </div>
  )
}

export default Home
