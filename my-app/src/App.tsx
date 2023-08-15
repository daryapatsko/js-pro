import React from 'react'; 
import Title from './components/Title';
import Menu from './components/Menu';
import Tabs from './components/Tabs';
import MainPosts from './components/MainPosts/MainPosts';

const App = () => {

  return (
    <div className="App">
      <Title customClass='header__title'>  
        <span>Sign In</span>
      </Title>
      <Menu menuClass='menu__container'>Artem Markin</Menu>
      <Tabs tabsClass='tabs_container'/>
      <MainPosts />
    </div>

  );
}

export default App;
