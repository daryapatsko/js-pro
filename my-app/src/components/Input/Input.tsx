import React, { FC } from 'react'

import "./Input.css"


interface IInput {
  className?: 'string',
  type: 'password' | 'text' | 'search' | 'email'| 'file',
  label?: string,
  placeholder?: string,
  value: string | number,
  onChange: (value: any) => void,

}


const Input: FC<IInput> = ({ type, label, placeholder, value, onChange }) => {

  return (
    <div className='input__container'>
      <label>{label}</label>
      <input className='input__form' value={value} type={type} placeholder={placeholder} onChange={(e) => onChange(e.currentTarget.value)} />
    </div>
  )
}

export default Input