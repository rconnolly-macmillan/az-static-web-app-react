import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const value = 'World';
  return (
    <>
      <Button variant="primary">Primary</Button>
      <div>Hello {value}</div>
    </>
  );
}

export default App;
