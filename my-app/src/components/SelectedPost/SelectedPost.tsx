import React from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Header from '../Header/Header'

import {
  StyleSelectedPostContainer,
  StyledDateSelected,
  StyledTitleSelected,
  StyledImgContainerSelected,
  StyledTextSelected,
  StyledBtnContainerSelected
} from './styled'


const SelectedPost = () => {
  // const { state } = useLocation()
  const post = useSelector(({ post }) => post);
  const navigate = useNavigate()

  return (
    <>
      <Header></Header>
      <StyleSelectedPostContainer>
        <StyledDateSelected>{post.date}
        </StyledDateSelected>
        <StyledTitleSelected>{post.title}</StyledTitleSelected>
        <StyledImgContainerSelected>
          <img src={post.image} alt={post.id} />
        </StyledImgContainerSelected>
        <StyledTextSelected>{post.text}</StyledTextSelected>
        <StyledBtnContainerSelected>
          {/* <Link to={`/blog/posts/${prevId}`} ><button className='btn__selected-post'>Previous</button></Link>
          <Link to={`/blog/posts/${nextId}`}><button className='btn__selected-post'>Next</button></Link> */}
          {/* <button type='button' onClick={() => navigate(`/blog/posts/${prevId}`)} className='btn__selected-post'>Previous</button> */}
        </StyledBtnContainerSelected>

      </StyleSelectedPostContainer>
    </>

  )
}

export default SelectedPost
