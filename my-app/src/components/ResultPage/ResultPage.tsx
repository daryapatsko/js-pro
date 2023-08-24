import React, {useEffect,useState} from 'react'
import Menu from '../Menu/Menu'
import Title from '../Title/Title'
import { StyledContainerResult } from './styled'
import { StyledImagePost } from './styled'
import { StyledContentResult } from './styled'
import { StyledDataPost} from './styled'
import { StyledTitlePost } from './styled'
import { StyledTextPost } from './styled'

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

const ResultPage = () => {
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

  const [searchValue, setSearchValue] = useState('')
  
  return (
    <div>
      <Menu value={searchValue} setSearchValue={setSearchValue}/>
      <Title customClass='title_search'>
        <span> Search result '{searchValue}'</span>
      </Title>
      <div className='main__posts'>
              {posts.filter((post) => post.title.toLowerCase().includes(searchValue)
              ).map (({id,text,image,date,title,description,author}:IPost) =>(
                <StyledContainerResult key={id}>
                <StyledContentResult>
                    <StyledImagePost src={image} alt={text}/>
                    <div className="text__post">
                        <StyledDataPost>{date}</StyledDataPost>
                        <StyledTitlePost>{title}</StyledTitlePost>
                        <StyledTextPost>{description}</StyledTextPost>
                    </div>
                </StyledContentResult>
                
              </StyledContainerResult>))}
      </div>
    </div>
  )
}

export default ResultPage
