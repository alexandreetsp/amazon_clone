import React from 'react';
import '../index.css'
import Header from './Header';
import Home from './Home'
import Footer from './Footer';
//import { BrowserRouter, Route} from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App