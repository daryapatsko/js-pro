import React, {FC} from 'react'
import "./Input.css"


interface IInput{
    type:'password' | 'text',
    label:string,
    placeholder:string,
    value:string,
    onChange: (value: string) => void,

}
const Input:FC<IInput> = ({type,label,placeholder,value,onChange}) => {
  return (
    <div>
      <label>{label}</label>
      <input className='input__form' value={value} type={type} placeholder={placeholder} onChange={(e) => onChange(e.currentTarget.value)}/>
    </div>
  )
}

export default Input