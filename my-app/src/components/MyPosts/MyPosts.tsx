import React, { useEffect } from 'react'
import { GET_MY_POSTS } from 'src/actions/actions'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import Post from 'src/components/Post'
import { useSelector } from 'react-redux'
import Title from 'src/components/Title'
import Header from 'src/components/Header'
import { StyledContainerMyPosts } from './styled'
import Modal from 'src/components/Modal/Modal'
import "./style.css"
import instance from 'src/store/axiosConfig'


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

const MyPosts = () => {
    const modalInfo = useSelector(({ modalInfo }) => modalInfo);
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>()
    const myPosts = useSelector(({ myPosts }) => myPosts)
   

    useEffect(() => {
        dispatch(GET_MY_POSTS())
    }, [])

    return (
        <div>
            <Header></Header>
            <Title customClass="title__blog">My Posts</Title>
            <StyledContainerMyPosts>
                {Array.isArray(myPosts) &&
                    myPosts.map(
                        ({ id, text, image, date, title, description, likes }: IPost) =>
                        (
                            <Post
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
            </StyledContainerMyPosts>
            {modalInfo.isOpenModal && <Modal />}
            <footer>
                <div>2022</div>
                <div>All rights reserved</div>
            </footer>
        </div>
    )
}

export default MyPosts
