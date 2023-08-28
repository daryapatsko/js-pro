import React, {useEffect,useState} from 'react'
import Header from '../Header/Header'
import Title from '../Title/Title'
import { StyledContainerResult,
  StyledImagePost,
  StyledContentResult,
  StyledDataPost,
  StyledTitlePost,
  StyledTextPost} from './styled'

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
  const [searchValue, setSearchValue] = useState('')
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
      <Header value={searchValue} setSearchValue={setSearchValue}>Artem Markin</Header>
      <Title customClass='title_search'>
        <span> Search result '{searchValue}'</span>
      </Title>
      <div className='main__posts'>
              {posts.filter((post) => post.title.toLowerCase().includes(searchValue)
              ).map (({id,text,image,date,title,description}:IPost) =>(
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
