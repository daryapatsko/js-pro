import React,{useEffect} from 'react';
import SignInForm from './Pages/SignInForm/SignInForm';
import Blog from './Pages/Blog/Blog';
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import SuccessPage from './components/SuccessPage/SuccessPage';
import SelectedPost from './components/SelectedPost/SelectedPost';
import ResultPage from './components/ResultPage/ResultPage';
import SignUp from './components/SignUp/SignUp';
import ActivateUser from './components/ActivateUser/ActivateUser';
import MyPosts from './components/MyPosts/MyPosts';
import AddPost from './Pages/AddPost/AddPost';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { decodeJwt,expToMinutes,updateAccessToken } from './helpers';
import { FETCH_POSTS } from './actions/actions';

const App = () => {
  const token = localStorage.getItem('access')
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate()

  const startTokenRefreshTimer = () => {
    if (!token) {
      return null;
    }
    const expirationTimestamp = decodeJwt(token).payload.exp;
    const currentTime = Date.now();
    const timeUntilExpiration = expirationTimestamp * 1000 - currentTime;

    if (timeUntilExpiration > 20000) {
      setInterval(updateAccessToken, timeUntilExpiration - 20000);
    } else {
      localStorage.removeItem('access');
    }
  };

  let expTimestampInSeconds = 0;

  if (token) {
    const decodedToken = decodeJwt(token);
    expTimestampInSeconds = decodedToken.payload.exp;
  }

  let remainingMinutes = expToMinutes(expTimestampInSeconds);
  console.log(remainingMinutes);

  useEffect(() => {
    startTokenRefreshTimer();
    if(token){
      dispatch(FETCH_POSTS());
    }
    
    window.addEventListener("storage", (event) => {
      console.log(event);

      if (event.key === "access" && event.newValue === null) {
        navigate("/sign_in");
      }
    });
  }, []);

  return (

    <Routes>
      {!token && (
        <>
          <Route path='/activate/:uid/:token' element={<ActivateUser />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/sign_in' element={<SignInForm />} />
          <Route path='/success_page' element={<SuccessPage />}></Route>
        </>
      )}
      <Route path='/' element={<Home />}></Route>
      <Route path='/posts' element={<Blog />}></Route>
      <Route path='/blog/posts/:id' element={<SelectedPost />}></Route>
      <Route path='/search' element={<ResultPage />}></Route>
      <Route path='/add-post' element={<AddPost/>}></Route>
      <Route path='/my-posts' element={<MyPosts/>}></Route>
    </Routes>

  );
}

export default App;