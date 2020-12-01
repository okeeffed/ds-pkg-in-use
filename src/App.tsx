import React from 'react';
import { Button } from '@okeeffed/ds-pkg-blog-post';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          label="Hello, world!"
          size="large"
          primary={true}
          onClick={() => console.log('click')}
        />
      </header>
    </div>
  );
}

export default App;
