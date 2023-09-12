import React, { useState } from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from '../Header/Header'
import Input from '../Input/Input'
import Title from '../Title/Title'

import { CREATE_USER } from 'src/actions/actions'


const SignUp = () => {
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    return (
        <>
            <div className="wrapper">
                <Header></Header>
                <div className="signIn__container">
                    <Link to='/'>Back to home</Link>
                    <Title customClass='header__title'>
                        <span>Sign Up</span>
                    </Title>

                    <form className='form__container'>
                        <Input type='text' value={username} placeholder='Your Name' label='Name' onChange={setUserName} />
                        <Input type='password' value={password} placeholder='Your password' label='Password' onChange={setPassword} />
                        <Input type='email' value={email} placeholder='Your email' label='Email' onChange={setEmail} />
                        <Input type='password' value={confirmPassword} placeholder='Confirm your password' label='Confirm your password' onChange={setConfirmPassword} />
                        <button  type='button' className='btn_signUp' onClick={() => dispatch(CREATE_USER({username, email, password}))}>Sign Up</button>
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

export default SignUp
