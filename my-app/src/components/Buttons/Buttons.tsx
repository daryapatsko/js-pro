import React from 'react'


interface IButtons{
    text: string;
    btnClass:string
}
const Buttons = ({text,btnClass}:IButtons) => {
  return (
    <div>
      <button  className={btnClass}>{text}</button>
    </div>
  )
}

export default Buttons
