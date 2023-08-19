import React from 'react'; 
<<<<<<< HEAD
import SignInForm from './components/SignInForm/SignInForm';
// import SuccessPage from './components/SuccessPage/SuccessPage';
// import SelectedPost from './components/SelectedPost/SelectedPost';
// import Blog from './components/Blog/Blog';
import "./App.css"
=======
import Title from './components/Title';
import Menu from './components/Menu';
import Tabs from './components/Tabs';
import MainPosts from './components/MainPosts/MainPosts';
>>>>>>> 7616651045af65b568ca5195117d83744270be00

const App = () => {

  return (
<<<<<<< HEAD
    <div className="wrapper">
      <SignInForm/>
      {/* <SuccessPage/> */}
      {/* <SelectedPost /> */}
      {/* <Blog/> */}
      <footer>
        <div>2022</div>
        <div>All rights reserved</div>
      </footer>
=======
    <div className="App">
      <Title customClass='header__title'>  
        <span>Sign In</span>
      </Title>
      <Menu menuClass='menu__container'>Artem Markin</Menu>
      <Tabs tabsClass='tabs_container'/>
      <MainPosts />
>>>>>>> 7616651045af65b568ca5195117d83744270be00
    </div>

  );
}

export default App;