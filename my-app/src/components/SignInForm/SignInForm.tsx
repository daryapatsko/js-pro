import React, { useState } from 'react'
import "./SignInForm.css"
import Title from '../Title/Title'
import Input from '../Input/Input'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import { StyledButtonSuccess } from './styled'

const SignInForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')
   return (
    <>
      <div className="wrapper">
        <Header></Header>
        <div className="signIn__container">
          <Link to='/'>Back to home</Link>
          <Title customClass='header__title'>  
            <span>Sign In</span>
          </Title>

          <form className='form__container'>
            <Input type='text' value={email} placeholder='Email' label='Email' onChange={setEmail}/>
            <Input type='password' value={password} placeholder='Password' label='Password' onChange={setPassword}/>
            <a  className='link__form'>Forgot password?</a>
            <div className="sub__form">
            <Link to='/success_page'><StyledButtonSuccess>Sign In</StyledButtonSuccess></Link>
              <div>Don't have an account? <span>Sign Up</span></div>
            </div>
          </form>
        </div>
        <footer>
          <div>2022</div>
          <div>All rights reserved</div>
       </footer>
      </div>    
      
    </>
   
  )
}

export default SignInForm