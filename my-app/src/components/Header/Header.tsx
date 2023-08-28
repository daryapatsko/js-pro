import React,{ReactNode,FC,useState} from 'react';
import "./style.css"

interface IHeader{
    children:ReactNode,

}
const Header:FC<IHeader> = ({children}) => {
    const [isActive, setIsActive] = useState(false)

    const handleBurgerClick = () =>{
        setIsActive(!isActive)
          }
  return (
    <div className='menu__container'>
        <nav>
            <div className={`burger_menu ${isActive ? 'open' : ''}`} id='burger' onClick={handleBurgerClick}>
                <span />
            </div>
            <div className="search_box">
                <input type="text" className="search" placeholder='Search...'/>
                <div className="close"></div>
            </div>
            <div className="img_search">&#128269;</div>
            <div className="username">{children}</div>
        </nav>
        <div className={`sidebar ${isActive ? 'open' : ''}`} >
            <div className="btns__sidebar">
                <div className="username btn__username">{children}</div>
                <div className="home nav__btn">Home</div>
                <div className="add__post nav__btn" >Add post</div>
            </div>
            <div className="btn__theme">
                <span>&#9788;</span>
                <span>&#9790;</span>
            </div>
            <div className="log__out">Log Out</div>
        </div>
      
    </div>
  )
}

export default Header