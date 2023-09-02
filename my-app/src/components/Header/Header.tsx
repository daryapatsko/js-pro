import React,{ReactNode,FC,useState} from 'react';
import "./style.css"
import { Link } from 'react-router-dom';
import { StyledHeader,StyledSidebarBtn } from './styled';
import { useDispatch } from 'react-redux';


interface IHeader{
    children?:ReactNode,
    value?:string;
    setSearchValue?:(value:string) =>void;
}
const Header:FC<IHeader> = ({children,setSearchValue}) => {
    const [isActive, setIsActive] = useState(false)
    const handleBurgerClick = () =>{
        setIsActive(!isActive)
          }
    const dispatch = useDispatch()

  return (
    <>
    <StyledHeader>
    <nav>
            <div className={`burger_menu ${isActive ? 'open' : ''}`} id='burger' onClick={handleBurgerClick}>
                <span />
            </div>
            <div className="search_box">
            {children}
            </div>
            <Link to='/search'><div className="img__search">&#128269;</div></Link>
            <div className="username">Username</div>
        </nav>
        <div className={`sidebar ${isActive ? 'open' : ''}`} >
            <div className="btns__sidebar">
                <div className="username btn__username">Username</div>
                <Link to='/'><StyledSidebarBtn>Home</StyledSidebarBtn></Link>
                <div className="add__post nav__btn" >Add post</div>
            </div>
            <div className="btn__theme">
                <span onClick={() => dispatch({type: "TOGGLE_THEME", payload: "light"}) }>&#9788;</span>
                <span  onClick={() => dispatch({type: "TOGGLE_THEME", payload: "dark"}) }>&#9790;</span>
            </div>
            <div className="log__out">Log Out</div>
        </div>
        </StyledHeader>
        </>
  )
}

export default Header