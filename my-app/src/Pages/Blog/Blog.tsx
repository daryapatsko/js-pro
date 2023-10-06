import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";

import Title from "src/components/Title";
import Tabs from "src/components/Tabs";
import MainPosts from "src/components/MainPosts/MainPosts";
import Header from "src/components/Header";

import { StyledBlogContainer } from "./styled";
import "./style.css";
import { useDispatch } from "react-redux";
import instance from "src/store/axiosConfig";
import Post from "src/components/Post";


interface IPost {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num?: number;
  title: string;
  description?: string;
  author?: number;
  likes: number;
  isFavorites: boolean;
}


const Blog = () => {
  const sort = useSelector(({ sort }) => sort)
  const dispatch = useDispatch()
  const theme = useSelector(({ theme }) => theme);
  const [sortingPosts, setSortingPosts] = useState([])

  useEffect(()=>{
  instance.get(`/blog/posts/?limit=10&offset=50&ordering=${sort}`)
  .then((data)=>{
    setSortingPosts(data.data.results)
  })
  },[sort])
  return (
    <>
      <StyledBlogContainer theme={theme}>
        <Header></Header>
        <Title customClass="title__blog">Blog</Title>
        <Tabs />
        <div className="sort_box">
          <div className="sort_title">Sorting by: </div>
          <select className='sorting_line' onChange={(e) => {
            dispatch({ type: "SET_SORT_BY", payload: e.target.value })
          }}>
            <option value="" ></option>
            <option value='title'>title</option>
            <option value='text'>text</option>
            <option value='description'>description</option>
            <option value='lesson_num'>lesson_num</option>
          </select>
        </div>
        {!sort ? <MainPosts /> : 
        sortingPosts.map(({ id, text, image, date, title, likes,description }: IPost) =>(
          <Post
          key={id}
          id={id}
          image={image}
          date={date}
          text={text}
          title={title}
          description={description}
          likes={likes}
        />
        )
        )}
        
        <div className="btn_container">
          <div className="prev__button">
            <div className="arrow-prev">&#129044;</div>
            <button className="btn__post">Prev</button>
          </div>
          <div className="next__button">
            <button className="btn__post">Next</button>
            <div className="arrow-next">&#129046;</div>
          </div>
        </div>
        <footer>
          <div>2022</div>
          <div>All rights reserved</div>
        </footer>
      </StyledBlogContainer>
    </>
  );
};

export default Blog;
