import React,{ReactNode} from 'react';
import "./style.css"

interface IMenu{
    menuClass: string;
    children:ReactNode
}
const Menu = ({menuClass,children}: IMenu) => {
    const handleBurgerClick = (event: any,b: number) =>{
      console.log(event)
      console.log(b)
          }
  return (
    <div className={menuClass}>
        <nav>
            <div className="burger_menu" id='burger' onClick={(e) => handleBurgerClick(e,45)}>
                <span />
            </div>
            <div className="search_box">
                <input type="text" className="search" placeholder='Search...'/>
                <div className="close"></div>
            </div>
            <div className="img_search"></div>
            <div className="username">{children}</div>
        </nav>
      
    </div>
  )
}

export default Menu