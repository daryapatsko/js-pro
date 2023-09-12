import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import Post from "../Post/Post";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

import { FETCH_POSTS } from "src/actions/actions";
import "./style.css";

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

const MainPosts = () => {
  // const [posts, setPosts] = useState<IPost[]>([])
  const posts = useSelector(({ posts }) => posts);
  const tab = useSelector(({ tab }) => tab);
  const modalInfo = useSelector(({ modalInfo }) => modalInfo);
  const isLoading = useSelector(({ isLoading }) => isLoading);
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  useEffect(() => {
    if (!posts.length)  dispatch(FETCH_POSTS());
  }, []);
  return (
    <>
      {isLoading ? <Loader /> : ""}
      {tab === "All" && (
        <div className="posts__container">
          <div className="left__side">
            <div className="main__posts">
              {posts.map(
                ({ id, text, image, date, title, description, likes }: IPost) =>
                  id === 1 ? (
                    <Post
                      id={id}
                      image={image}
                      date={date}
                      text={text}
                      title={title}
                      description={description}
                      likes={likes}
                    />
                  ) : (
                    ""
                  )
              )}
            </div>
            <div className="middle__posts">
              {posts.map(
                ({ id, text, image, date, title, description, likes }: IPost) =>
                  id > 1 && id < 6 ? (
                    <Post
                      id={id}
                      image={image}
                      date={date}
                      text={text}
                      description={description}
                      likes={likes}
                      title={title}
                    />
                  ) : (
                    ""
                  )
              )}
            </div>
          </div>
          <div className="little__posts">
            {posts.map(({ id, text, image, date, title, likes }: IPost) =>
              id > 5 ? (
                <Post
                  id={id}
                  image={image}
                  date={date}
                  text={text}
                  title={title}
                  likes={likes}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      )}
      {tab === "Favorites" && (
        <div className="middle__posts">
          {posts
            .filter((post: IPost) => post.isFavorites)
            .map(({ id, text, image, date, title, likes }: IPost) => (
              <Post
                id={id}
                image={image}
                date={date}
                text={text}
                title={title}
                likes={likes}
              ></Post>
            ))}
        </div>
      )}
      <>
        {tab === "Popular" && (
          <div className="popular__posts">
            {posts
              .sort((a: IPost, b: IPost) => b.likes - a.likes)
              .slice(0, 5)
              .map(({ id, text, image, date, title, likes }: IPost) => (
                <Post
                  id={id}
                  image={image}
                  date={date}
                  text={text}
                  title={title}
                  likes={likes}
                ></Post>
              ))}
          </div>
        )}
      </>
      {modalInfo.isOpenModal && <Modal />}
    </>
  );
};

export default MainPosts;
