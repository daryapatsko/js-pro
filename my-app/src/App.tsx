import React from 'react'; 
import SignInForm from './components/SignInForm/SignInForm';
import Blog from './components/Blog/Blog';
import "./App.css"
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import SuccessPage from './components/SuccessPage/SuccessPage';
import SelectedPost from './components/SelectedPost/SelectedPost';


const App = () => {
  
  return (
   
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/sign_in' element={<SignInForm/>}></Route>
      <Route path='/success_page' element={<SuccessPage/>}></Route>
      <Route path='/posts' element={<Blog/>}></Route>
      <Route path='/post/:id' element={<SelectedPost/>}></Route>
    </Routes>
  
  );
}

export default App;