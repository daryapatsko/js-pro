import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import "./style.css"


interface ITab {
  label: string;
  children?: string;
}


const Tab: FC<ITab> = ({ label, children }) => {
  const tab = useSelector(({ tab }) => tab)
  const dispatch = useDispatch()
  return (
    <div className={`${tab === label ? 'active' : ''}`} onClick={() => dispatch({ type: "TOGGLE_TABS", payload: label })}>
      <label className='tab'>{label}</label>
      {children}
    </div>
  )
}

export default Tab
