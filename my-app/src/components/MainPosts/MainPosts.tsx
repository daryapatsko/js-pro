import React, {useState,useEffect} from 'react'
import Post from '../Post/Post'
import "./style.css"
import {useNavigate,useLocation, useParams, Link} from 'react-router-dom'



interface IPost{
  "id": number,
  "image": string,
  "text": string,
  "date": string,
  "lesson_num"?: number,
  "title": string,
  "description"?: string,
  "author"?: number
}

const MainPosts = () => {
    const [posts, setPosts] = useState<IPost[]>([])

  const fetchPosts = () => {
      fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10')
      .then((response) => response.json())
      .then((data) => {
      setPosts(data.results);
      })
      .catch((err) => {
        console.log(err.message)
      });
  };

  useEffect(() =>{
    fetchPosts()
  },[])
  return (
    
    <div>
        <div className="posts__container" > 
          <div className="left__side">
            <div className='main__posts'>
              {posts.map (({id,text,image,date,title,description,author}:IPost) =>(
                id === 1 ? (
                <Link  to={`/post/${id}`} state= {{id, image, text,date,title}}>
                  <Post id={id} image={image} date={date} text={text} title={title} description={description} author={author}/>
                </Link>
                )
                : ''))}
            </div>
            <div className="middle__posts">
            {posts.map (({id,text,image,date,title,author}:IPost) =>(
                id > 1 && id < 6  ? (
                  <Link  to={`/post/${id}`} state= {{id, image, text,date,title}}>
                  <Post id={id} image={image} date={date} text={text} title={title} author={author}/>
                </Link>
                )
                : ''))}
            </div>
          </div>
          <div className="little__posts">
          {posts.map (({id,text,image,date,title,author}:IPost) =>(
              id > 5  ? (
                <Link  to={`/post/${id}`} state= {{id, image, text,date,title}}>
                    <Post id={id} image={image} date={date} text={text} title={title} author={author}/>
                </Link>
              
              )
              : ''))}
          </div>
        </div>
    </div>
  )
}

export default MainPosts
