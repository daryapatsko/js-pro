import React from 'react'
import "./style.css"
import Title from '../Title/Title'
import Tabs from '../Tabs/Tabs'
import MainPosts from '../MainPosts/MainPosts'
import Buttons from '../Buttons/Buttons'
import Menu from '../Menu/Menu'

const Blog = () => {
  return (
    <div >
      <Menu menuClass='menu__container'>Artem Markin</Menu>
      <div className="blog_container">
        <Title customClass='title_blog'>
          Blog
        </Title>
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
      </div>
      
    </div>
  )
}

export default Blog
