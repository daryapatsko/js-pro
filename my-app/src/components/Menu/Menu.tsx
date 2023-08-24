import React from 'react';
import "./style.css"

interface IMenu{
    value:string;
    setSearchValue:(value:string) =>void;
}


const Menu = ({value,setSearchValue}: IMenu) => {
    const handleBurgerClick = (event: React.MouseEvent<HTMLElement>,b: number) =>{
      console.log(event)
      console.log(b)
    }
   
  return (
    <div className='menu__container'>
        <nav>
            <div className="burger_menu" id='burger' onClick={(e) => handleBurgerClick(e,45)}>
                <span />
            </div>
            <div className="search_box">
                <input
                className='input__form'
                type='search' 
                value={value} 
                placeholder='Search ...' 
                onChange={(e) => setSearchValue(e.currentTarget.value.toLowerCase())}
                />
                <div className="close" />
            </div>
            <div className="img_search"></div>
            <div className="username">User</div>
        </nav>
      
    </div>
  )
  }

export default Menu