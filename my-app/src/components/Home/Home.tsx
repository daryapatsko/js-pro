import React from 'react'
import Header from '../Header/Header'
import Title from '../Title/Title'
import { StyledButtonHome } from './styled'
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <div className='wrapper'>
      <Header></Header>
      <Title customClass='title__homePage'> Home Page</Title>
      <Link to='/sign_in'><StyledButtonHome>Sign In</StyledButtonHome></Link>
      <Link to='/sign_up'><StyledButtonHome>Sign Up</StyledButtonHome></Link>
      <footer>
        <div>2022</div>
        <div>All rights reserved</div>
      </footer>
    </div>
  )
}

export default Home
