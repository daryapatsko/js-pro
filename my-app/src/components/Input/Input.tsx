import React, {FC} from 'react'
import "./Input.css"


interface IInput{
    type:'password' | 'text',
    label:string,
    placeholder:string
}
const Input:FC<IInput> = ({type,label,placeholder}) => {
  return (
    <div>
      <label>{label}</label>
      <input className='input__form' type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input