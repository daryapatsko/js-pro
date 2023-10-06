import React, { useEffect, useState } from 'react'
import instance from 'src/store/axiosConfig'

import Header from 'src/components/Header'
import Title from 'src/components/Title'

import {
  StyledContainerResult,
  StyledImagePost,
  StyledContentResult,
  StyledDataPost,
  StyledTitlePost,
  StyledTextPost
} from './styled'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

interface IPost {
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
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [searchPosts, setSearchPosts] = useState<IPost[]>([])
  // const [posts, setPosts] = useState<IPost[]>([])
  const posts: IPost[] = useSelector(({ posts }) => posts)
  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase())
  })
 
  useEffect(() => {
    instance.get(`blog/posts/?search=${searchValue}`)
      .then((data) => {
        console.log(data)
        setSearchPosts(data.data.results)
      })
  }, [searchValue])

  return (
    <div>
      <Header>
        <input type="search"
        id='search'
          className="search"
          placeholder='Search...'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        />
        <div className="close"></div>
      </Header>
      <Title customClass='title_search'>
        <span> Search result '{searchValue}'</span>
      </Title>
      <div className='main__posts'>
        {Array.isArray(filteredPosts) && 
        filteredPosts.map(({ id, text, image, date, title, description }: IPost) => (
          <StyledContainerResult key={id}>
            <StyledContentResult>
              <StyledImagePost src={image} alt={text} />
              <div className="text__post">
                <StyledDataPost>{date}</StyledDataPost>
                <StyledTitlePost>{title}</StyledTitlePost>
                <StyledTextPost>{description}</StyledTextPost>
              </div>
            </StyledContentResult>

          </StyledContainerResult>
        ))
        }
      </div>
    </div>
  )
}

export default ResultPage
