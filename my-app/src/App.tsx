import React from 'react'; 
import SignInForm from './components/SignInForm/SignInForm';
// import SuccessPage from './components/SuccessPage/SuccessPage';
// import SelectedPost from './components/SelectedPost/SelectedPost';
// import Blog from './components/Blog/Blog';
import "./App.css"

const App = () => {

  return (
    <div className="wrapper">
      <SignInForm/>
      {/* <SuccessPage/> */}
      {/* <SelectedPost /> */}
      {/* <Blog/> */}
      <footer>
        <div>2022</div>
        <div>All rights reserved</div>
      </footer>
    </div>

  );
}

export default App;