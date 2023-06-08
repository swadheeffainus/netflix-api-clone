import React from 'react'
import Navbar from './components/navbar/navbar';
import './App.css'
import Banner from './components/navbar/Banner/Banner';
import RowPost from './components/navbar/RowPost/RowPost';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
