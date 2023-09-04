import React,{FC} from 'react'
import { StyledModalContainer,StyledModalWindow } from './styled'
import { useSelector,useDispatch } from 'react-redux'
import Post from '../Post/Post'


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


const Modal:FC = () => {
  const modalInfo = useSelector(({modalInfo}) => modalInfo)
  const posts = useSelector(({posts}) => posts)
  return (
    <>
      <StyledModalContainer>
        <StyledModalWindow>{
          posts.filter((post:IPost) => post.id === modalInfo.id)
          .map(({id,text,image,date,title,description,likes}:IPost) => (
            <Post  id={id} image={image} date={date} text={text} title={title} description={description} likes={likes}></Post>
          ))}
        </StyledModalWindow>
      </StyledModalContainer>
    </>
  )
}

export default Modal
