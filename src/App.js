import './App.scss';
import moment from 'moment'
import { useState, useEffect } from 'react'
import Header from './components/header/header'
import DarkMode from './components/darkMode/darkMode'
import Input from './components/input/input'
import List from './components/list/list'
import Filter from './components/filter/filter'
import DragDropText from './components/dragDropText/deagDropText'


function App() {

  return (
    <div className="App">
      <Header/>
       <DarkMode />
      {/*<Input />
      <List />
      <Filter />
      <DragDropText /> */}
    </div>
  );
}

export default App;
