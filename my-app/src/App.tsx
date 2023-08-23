import React, { useState,createContext } from 'react'; 
// import SignInForm from './components/SignInForm/SignInForm';
// import SuccessPage from './components/SuccessPage/SuccessPage';
// import SelectedPost from './components/SelectedPost/SelectedPost';
// import Blog from './components/Blog/Blog';
import "./App.css"
import ResultPage from './components/ResultPage/ResultPage';


interface ITheme{
  theme: 'light' | 'dark' ;
  switchTheme: () => void;
 }
export const ThemeContext = createContext<ITheme>({theme: 'light', switchTheme: () => {}})

const App = () => {

const [theme, setTheme] = useState<'light' | 'dark'>('light')

const switchTheme = () => {
  setTheme (theme=== 'dark' ? 'light' : 'dark')
}
  return (
   <ThemeContext.Provider value={{theme, switchTheme}}>
    <div className="wrapper">
    <ResultPage/>
      {/* <SignInForm/> */}
      {/* <SuccessPage/> */}
      {/* <SelectedPost /> */}
      {/* <Blog/> */}
      <footer>
        <div>2022</div>
        <div>All rights reserved</div>
      </footer>
    </div>
   </ThemeContext.Provider>

  );
}

export default App;