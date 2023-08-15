import React, {useState} from 'react'
import Post from '../Post/Post'
import "./style.css"



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

      console.log(posts)
  };
  return (
    <div>
      <button onClick={fetchPosts} >Get Posts</button> 
    
        <div className="posts__container" > 
          <div className="left__side">
            <div className='main__posts'>
              {posts.map (({id,text,image,date,title,description,author}:IPost) =>(
                id === 1 ? (
                <Post id={id} image={image} date={date} text={text} title={title} description={description} author={author}/>)
                : ''))}
            </div>
            <div className="middle__posts">
            {posts.map (({id,text,image,date,title,author}:IPost) =>(
                id > 1 && id < 6  ? (
                <Post id={id} image={image} date={date} text={text} title={title} author={author}/>)
                : ''))}
            </div>
          </div>
          <div className="little__posts">
          {posts.map (({id,text,image,date,title,author}:IPost) =>(
              id > 5  ? (
              <Post id={id} image={image} date={date} text={text} title={title} author={author}/>)
              : ''))}
          </div>
        </div>
    </div>
  )
}

export default MainPosts
