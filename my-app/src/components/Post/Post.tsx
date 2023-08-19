import React from 'react'
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

const Post = ({id, image,text,date,title,description}:IPost) => {
  return (
    <div className='post__box' key={id}>
      <div className="content__post-box">
        <h3 className='date__post'>{date}</h3>
        <h3 className='title__post'>{title}</h3>
        <p className="description__post">{description}</p>
      </div>
      <div className="image__post"><img src={image} alt={text} /></div>


<<<<<<< HEAD

=======
      
>>>>>>> 7616651045af65b568ca5195117d83744270be00
    </div>
  )
}

<<<<<<< HEAD
export default Post
=======
export default Post
>>>>>>> 7616651045af65b568ca5195117d83744270be00
