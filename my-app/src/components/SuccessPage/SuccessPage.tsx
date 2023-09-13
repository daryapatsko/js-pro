import React from 'react'
import { Link } from 'react-router-dom'

import Title from '../Title/Title'
import Header from '../Header/Header'

import { StyledButtonHome } from './styled'
import "./style.css"



const SuccessPage = () => {
  return (
    <>
      <Header></Header>
      <div className='signIn__container'>
        <Link to='/'>Back to home</Link>
        <Title customClass='header__title'>
          <span>Success</span>
        </Title>
        <form className='form__container'>
          <p>Email confirmed</p>
          <p>Your registration is now completed!</p>
          <Link to='/posts'><StyledButtonHome>
            Go To Home!
          </StyledButtonHome></Link>
        </form>

      </div>
      <footer>
        <div>2022</div>
        <div>All rights reserved</div>
      </footer>
    </>

  )
}

export default SuccessPage
