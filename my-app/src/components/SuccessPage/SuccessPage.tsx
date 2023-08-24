import React,{useState} from 'react'
import Title from '../Title/Title'
import "./style.css"
// import { Button } from './SuccessPageStyled.ts'
import Menu from '../Menu/Menu'

const SuccessPage = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <>
    <Menu value={searchValue} setSearchValue={setSearchValue}/>
    <div className='signIn__container'>
      <a className='link__form'>Back to home</a>
      <Title customClass='header__title'>  
          <span>Success</span>
      </Title>
      <form className='form__container'>
          <p>Email confirmed</p>
          <p>Your registration is now completed!</p>
          <button className='btn__form' onClick={() =>
          console.log('Go to home!')}>
              Go To Home!
          </button>
      </form>
    </div>
    </>
    
  )
} 

export default SuccessPage
