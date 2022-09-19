import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Selection from "./components/Selection"
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import App from './components/App.jsx';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="selection" element={<Selection/>}></Route>
           
       </Routes>
    </BrowserRouter>, document.getElementById('root'))