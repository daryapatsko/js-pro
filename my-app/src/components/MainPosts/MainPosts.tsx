import React, {useState,useEffect} from 'react'
import Post from '../Post/Post'
import "./style.css"
import { useDispatch,useSelector } from 'react-redux'
import Modal from '../Modal/Modal'




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

const MainPosts = () => {
    // const [posts, setPosts] = useState<IPost[]>([])
const posts = useSelector(({posts}) => posts)
  const dispatch = useDispatch()
const modalInfo = useSelector(({modalInfo}) => modalInfo)
  const fetchPosts = () => {
      fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10')
      .then((response) => response.json())
      .then((data) => {
      // setPosts(data.results);
      dispatch({type: "SET_POSTS", payload: data.results})
      })
      .catch((err) => {
        console.log(err.message)
      });
  };

  useEffect(() =>{
    fetchPosts()
  },[])
  return (
    
    <>
        <div className="posts__container" > 
          <div className="left__side">
            <div className='main__posts'>
              {posts.map (({id,text,image,date,title,description,likes}:IPost) =>(
                id === 1 ? (
                  <Post id={id} image={image} date={date} text={text} title={title} description={description} likes={likes}/>
                )
                : ''))}
            </div>
            <div className="middle__posts">
            {posts.map (({id,text,image,date,title,description,likes}:IPost) =>(
                id > 1 && id < 6  ? (
                  <Post id={id} image={image} date={date} text={text} description={description} likes={likes} title={title}/>
                )
                : ''))}
            </div>
          </div>
          <div className="little__posts">
          {posts.map (({id,text,image,date,title,likes}:IPost) =>(
              id > 5  ? (
                <Post id={id} image={image} date={date} text={text} title={title} likes={likes}/>
              )
              : ''))}
          </div>
        </div>
        {modalInfo.isOpenModal && <Modal/>}
    </>
  )
}

export default MainPosts
