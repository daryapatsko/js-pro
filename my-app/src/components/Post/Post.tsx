import React from 'react'
import "./style.css"
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';



interface IPost{
  id: number,
  image: string,
  text: string,
  date: string,
  lesson_num?: number,
  title: string,
  description?: string,
  author?: number,
  likes:number;
}

const Post = ({id, image,text,date,title,description,likes}:IPost) => {
 const dispatch = useDispatch()
 const navigate = useNavigate()
   return (
   <>
     <div className='post__box' key={id} >
      <div className="content__post-box">
        <h3 className='date__post'>{date}</h3>
        <h3 className='title__post' onClick={() => navigate(`/post/${id}`,{state: {id,image,title,text,date}})}>{title}</h3>
        <p className="description__post">{description}</p>
        <div className="info__post">
          <span className='likes' onClick={() =>dispatch ({type: "ADD_LIKES",payload: id })}>&#128077;<span>{likes || 0}</span></span>
          <span className='dislikes' onClick={() =>dispatch ({type: "ADD_DISLIKES",payload: id })}>&#128078;</span>
          <span className='favorites' onClick={() =>dispatch ({type: "ADD_FAVORITES",payload: id })}>&#9825;</span>
          <div className='pagination' onClick={() => dispatch({type:"TOGGLE_MODAL", payload: id, image,text,date,title,description,likes }) }>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
        </div>
        
       
      </div>
      <div className="image__post"><img src={image} alt={text} /></div>
    </div>
   </>
  )
}

export default Post
