import React from 'react'

import FetchData from './components/FetchData'
import './App.scss';

function App() {
  return (
      <main role="main" className="app">
      <header className="app_header">
        <h1 className="app_header-title">Books list</h1>
      </header>
      <FetchData />
    </main >
  );
}

export default App;
