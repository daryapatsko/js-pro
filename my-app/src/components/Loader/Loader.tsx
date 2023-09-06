import React from 'react'
import './style.css'

const Loader = () => {
  return (
    <div>
      <div className="spinner-container">
      <div className="spinner">
        <div className="spinner-inner"></div>
        <div className="spinner-text">Loading...</div>
      </div>
    </div>
    </div>
  )
}

export default Loader
