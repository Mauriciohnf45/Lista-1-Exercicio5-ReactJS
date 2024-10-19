// src/App.js
import React from 'react';
import VerificarEstudante from './components/VerificarEstudante';

function App() {
  return (
    <div className="App">
      <VerificarEstudante estudante={true} />
    </div>
  );
}

export default App;
