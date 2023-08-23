import React, { useState } from 'react'
import "./SignInForm.css"
import Title from '../Title/Title'
import Input from '../Input/Input'
import Menu from '../Menu/Menu'

const SignInForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')

   return (
    <div>
      <Menu menuClass='menu__container'>Artem Markin</Menu>
      <div className="signIn__container">
        <a className='link__form'>Back to home</a>
        <Title customClass='header__title'>  
          <span>Sign In</span>
        </Title>

        <form className='form__container'>
          <Input type='text' value={email} placeholder='Email' label='Email' onChange={setEmail}/>
          <Input type='password' value={password} placeholder='Password' label='Password' onChange={setPassword}/>
          <a  className='link__form'>Forgot password?</a>
          <div className="sub__form">
            <button className='btn_form'>Sign In</button>
            <div>Don't have an account? <span>Sign Up</span></div>
          </div>
        </form>
      </div>
      
      
    </div>
   
  )
}

export default SignInForm