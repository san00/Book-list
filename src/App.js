import React from 'react'

import FetchData from './components/FetchData'
import Header from './components/Header'

function App() {
  return (
    <main data-test='component-app'>
      <Header />
      <FetchData />
    </main >
  );
}

export default App;
