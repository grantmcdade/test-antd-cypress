import React from 'react';
import './App.css';
import { Button, Upload } from 'antd';

const { Dragger } = Upload;

function App() {
  return (
    <div className="App">
      <Dragger />
      <Button type="primary">Test</Button>
    </div>
  );
}

export default App;
