import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useNavigate } from "react-router-dom";

import Header from '../Header/Header'
import Title from '../Title/Title'

import { StyledBlogContainer } from './styled'
import { useParams } from 'react-router-dom'
import { ACTIVATE_USER } from 'src/actions/actions'



const ActivateUser = () => {
    const navigate = useNavigate()
    const theme = useSelector(({ theme }) => theme);
    const {uid, token}= useParams()
    const dispatch: ThunkDispatch<any, {}, AnyAction> = useDispatch()
   
    useEffect(() => {
        if (uid && token) {
            dispatch(ACTIVATE_USER(navigate, uid,token))
        }
        
    }, [uid, token])
  return (
    <>
      <StyledBlogContainer theme={theme}>
      <Header></Header>
        <Title customClass="title__blog">Activate</Title>
        <footer>
          <div>2022</div>
          <div>All rights reserved</div>
        </footer>
      </StyledBlogContainer>
    </>
  )
}

export default ActivateUser


