import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Restricted from './pages/Restricted';
import Error from './pages/Error';
import Page from './pages/Page';


function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await fetch(`/api/message`)
        .then(res => res.json());

      setData(text);
    })();
  });

  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/restricted" element={<Restricted />} />
      <Route path="/error" element={<Error />} />
      <Route path="/contribute" element={<Page content={"test content"} />} />
    </Routes>
  )
}

export default App;
