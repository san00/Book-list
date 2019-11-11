import React from 'react';
import './App.css';
import SearchBooks from './components/SearchBooks';

function App() {
  return (
    <main role="main" className="App">
      <header className="App-header">
        <h1>Books list</h1>
      </header>
      <SearchBooks/>
    </main>
  );
}

export default App;
