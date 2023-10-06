import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

import Title from 'src/components/Title'
import Input from 'src/components/Input/Input'
import Header from 'src/components/Header'
import { SIGN_IN } from 'src/actions/actions'

import { StyledButtonSuccess } from './styled'
import "./SignInForm.css"



const SignInForm = () => {
const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
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
            <Input type='text' value={email} placeholder='Email' label='Email' onChange={setEmail} />
            <Input type='password' value={password} placeholder='Password' label='Password' onChange={setPassword} />
            <Link to='/'>Forgot password?</Link>
            <div className="sub__form">
              <StyledButtonSuccess  type='button' onClick={() => dispatch(SIGN_IN(navigate,email, password))}>Sign In</StyledButtonSuccess>
              <div>Don't have an account? <span onClick={() => navigate('/sign_up')}>Sign Up</span></div>
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