import React, {FC} from 'react'
import "./Input.css"


interface IInput{
    className?:'string',
    type:'password' | 'text' | 'search',
    label?:string,
    placeholder:string,
    value:string,
    onChange: (value: string) => void,

}


const Input:FC<IInput> = ({type,label,placeholder,value,onChange}) => {
  return (
    <div className='input__container'>
      <label>{label}</label>
      <input className='input__form' value={value} type={type} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}/>
    </div>
  )
}

export default Input