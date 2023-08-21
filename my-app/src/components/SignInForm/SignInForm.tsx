import React from 'react'
import "./SignInForm.css"
import Title from '../Title/Title'
import Input from '../Input/Input'
import Menu from '../Menu/Menu'

const SignInForm = () => {
   return (
    <div>
      <Menu menuClass='menu__container'>Artem Markin</Menu>
      <div className="signIn__container">
        <a className='link__form'>Back to home</a>
        <Title customClass='header__title'>  
          <span>Sign In</span>
        </Title>

        <form className='form__container'>
          <Input type='text' placeholder='Email' label='Email'/>
          <Input type='password' placeholder='Password' label='Password'/>
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