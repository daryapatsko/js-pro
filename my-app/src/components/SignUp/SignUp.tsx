import React, {useState} from 'react'
import Header from '../Header/Header'
import Input from '../Input/Input'
import Title from '../Title/Title'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CREATE_USER } from 'src/actions/actions'

const SignUp = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    const [name,setName] = useState('')
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
                        <Input type='text' value={name} placeholder='Your Name' label='Name' onChange={setName} />
                        <Input type='password' value={password} placeholder='Your password' label='Password' onChange={setPassword} />
                        <Input type='email' value={email} placeholder='Your email' label='Email' onChange={setEmail} />
                        <Input type='password' value={confirmPassword} placeholder='Confirm your password' label='Confirm your password' onChange={setConfirmPassword} />
                        {/* @ts-expect-error*/}
                        <button className='btn_signUp' onClick={() => dispatch(CREATE_USER({email,password,name}))}>Sign Up</button>
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
