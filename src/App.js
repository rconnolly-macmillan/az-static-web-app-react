import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Page from './pages/Page';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home data={`Home Page`} />} />
      <Route path="/restricted" element={<Page content={"Restricted Page"} />} />
      <Route path="/restricted" element={<Page content={"Admin Page"} />} />
    </Routes>
  )
}

export default App;
