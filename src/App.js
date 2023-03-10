import { useState, useEffect } from 'react';
import Api from './services/Api';

function App() {
  useEffect(() => {
    Api.get('teste').then(res => {
      console.log(res.data);
    });
  }, [])

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro app!</p>
    </div>
  );
}

export default App;
