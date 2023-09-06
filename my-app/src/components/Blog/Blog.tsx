import React from 'react'
import "./style.css"
import Title from '../Title/Title'
import Tabs from '../Tabs/Tabs'
import MainPosts from '../MainPosts/MainPosts'
import Header from '../Header/Header'
import { StyledBlogContainer } from './styled'
import { useSelector } from 'react-redux';


const Blog = () => {
  const theme = useSelector(({ theme }) => theme)
  return (
    <>
      <StyledBlogContainer theme={theme} >
        <Header></Header>
        <Title customClass='title__blog'>Blog</Title>
        <Tabs />
        <MainPosts />
        <div className="btn_container">
          <div className="prev__button">
            <div className="arrow-prev">&#129044;</div>
            <button className='btn__post'>Prev</button>
          </div>
          <div className="next__button">
            <button className='btn__post'>Next</button>
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
