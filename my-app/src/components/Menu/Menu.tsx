import React,{ReactNode, useState} from 'react';
import "./style.css"

interface IMenu{
    menuClass: string;
    children:ReactNode;
}


const Menu = ({menuClass,children}: IMenu) => {
    const handleBurgerClick = (event: React.MouseEvent<HTMLElement>,b: number) =>{
      console.log(event)
      console.log(b)
    }
    const [searchValue, setSearchValue] = useState('')
 
  return (
    <div className={menuClass} >
        <nav>
            <div className="burger_menu" id='burger' onClick={(e) => handleBurgerClick(e,45)}>
                <span />
            </div>
            <div className="search_box">
                <input
                className='input__form'
                type='search' 
                value={searchValue} 
                placeholder='Search ...' 
                onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className="close" />
            </div>
            <div className="img_search"></div>
            <div className="username">{children}</div>
        </nav>
      
    </div>
  )
  }

export default Menu