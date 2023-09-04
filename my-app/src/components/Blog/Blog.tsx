import React from 'react'
import "./style.css"
import Title from '../Title/Title'
import Tabs from '../Tabs/Tabs'
import MainPosts from '../MainPosts/MainPosts'
import Buttons from '../Buttons/Buttons'
import Header from '../Header/Header'
import { StyledBlogContainer } from './styled'
import { useSelector } from 'react-redux';

const Blog = () => {
  const  theme = useSelector(({theme}) => theme)
  return (
    <>
    <StyledBlogContainer  theme={theme} >
    <Header></Header>
      <Title customClass='title__blog'>Blog</Title>
      <Tabs/>
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
      <footer>
        <div>2022</div>
        <div>All rights reserved</div>
      </footer>
    </StyledBlogContainer>
    </>
  )
}

export default Blog
