import React from 'react'; 
import SignInForm from './components/SignInForm/SignInForm';
import Blog from './components/Blog/Blog';
import "./App.css"
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import SuccessPage from './components/SuccessPage/SuccessPage';
import SelectedPost from './components/SelectedPost/SelectedPost';
import ResultPage from './components/ResultPage/ResultPage';
import SignUp from './components/SignUp/SignUp';


const App = () => {
  
  return (
   
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/sign_in' element={<SignInForm/>}></Route>
      <Route path='/success_page' element={<SuccessPage/>}></Route>
      <Route path='/posts' element={<Blog/>}></Route>
      <Route path='/post/:id' element={<SelectedPost/>}></Route>
      <Route path='/search' element={<ResultPage/>}></Route>
      <Route path='/sign_up' element={<SignUp/>}></Route>
    </Routes>
  
  );
}

export default App;