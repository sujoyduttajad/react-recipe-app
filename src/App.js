import React from 'react'
import './App.css';
import Recipe from './components/Recipe'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="App">
      <Sidebar />
      <Recipe /> 
    </div>
  );
}

export default App;
