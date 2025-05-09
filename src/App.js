import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const {text} = await fetch(`/api/message`)
      .then(res => res.json());
      
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
