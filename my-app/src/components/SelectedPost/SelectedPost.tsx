import React from 'react'
import Header from '../Header/Header'
import { useLocation, Link} from 'react-router-dom'
import { StyleSelectedPostContainer, 
         StyledDateSelected,
         StyledTitleSelected,
         StyledImgContainerSelected,
         StyledTextSelected,
         StyledBtnContainerSelected} from './styled'


const SelectedPost = () => {
  const {state}= useLocation()
  
  return (
    <>
    <Header>Artem Markin</Header>
    <StyleSelectedPostContainer>
        <StyledDateSelected>{state.date}
        </StyledDateSelected>
        <StyledTitleSelected>{state.title}</StyledTitleSelected>
        <StyledImgContainerSelected>
          <img src={state.image} alt={state.id}/>
        </StyledImgContainerSelected>
        <StyledTextSelected>{state.text}</StyledTextSelected>
        <StyledBtnContainerSelected>
            <Link to={`/post/${(state.id)-1}`}><button className='btn__selected-post'>Previous</button></Link>
            <Link to={`/post/${(state.id)+1}`}><button className='btn__selected-post'>Next</button></Link>
        </StyledBtnContainerSelected>
      
    </StyleSelectedPostContainer>
    </>
   
  )
}

export default SelectedPost
