import React, { ReactNode, FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import { StyledHeader, StyledSidebarBtn } from './styled';
import "./style.css"



interface IHeader {
    children?: ReactNode,
    value?: string;
    setSearchValue?: (value: string) => void;
}
const Header: FC<IHeader> = ({ children, setSearchValue }) => {
    const name = useSelector(({ name }) => name);
    const [isActive, setIsActive] = useState(false)
    const handleBurgerClick = () => {
        setIsActive(!isActive)
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logOut = (() => {
        localStorage.removeItem('access')
        navigate('/sign_in')
    })
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
                    <div className="username">{name}</div>
                </nav>
                <div className={`sidebar ${isActive ? 'open' : ''}`} >
                    <div className="btns__sidebar">
                        <div className="username btn__username">{name}</div>
                        <Link to='/'><StyledSidebarBtn>Home</StyledSidebarBtn></Link>
                        <div className="add__post nav__btn" >Add post</div>
                    </div>
                    <div className="btn__theme">
                        <span onClick={() => dispatch({ type: "TOGGLE_THEME", payload: "light" })}>&#9788;</span>
                        <span onClick={() => dispatch({ type: "TOGGLE_THEME", payload: "dark" })}>&#9790;</span>
                    </div>
                    <button className="log__out" onClick={logOut} >Log Out</button>
                </div>
            </StyledHeader>
        </>
    )
}

export default Header