import React,{ useContext,useState } from 'react'
import "./style.css"
import Title from '../Title/Title'
import Tabs from '../Tabs/Tabs'
import MainPosts from '../MainPosts/MainPosts'
import Buttons from '../Buttons/Buttons'
import Menu from '../Menu/Menu'
import { ThemeContext } from 'src/App'
import { StyledBlogContainer } from './styled'

const Blog = () => {
  
  const {theme, switchTheme} = useContext(ThemeContext)
  const [searchValue, setSearchValue] = useState('')
  return (
    <div >
      <Menu value={searchValue} setSearchValue={setSearchValue}/>
      <StyledBlogContainer theme={theme}>
        <Title customClass='title_blog'>
          Blog
        </Title>
        <Tabs/>
        <button className='btn__switch' onClick={switchTheme}>Switch Theme</button>
        <MainPosts/>
        <div className="btn_container">
          <div className="prev__button">
            <div className="arrow-prev">&#129044;</div>
            <Buttons btnClass='btn__post' text='Prev'/>
          </div>
          <div className="next__button">
            <Buttons btnClass='btn__post' text='Next'/>
            <div className="arrow-next">&#129046;</div>
          </div>
        </div>
      </StyledBlogContainer>
      
    </div>
  )
}

export default Blog
