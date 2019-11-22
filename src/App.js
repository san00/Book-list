import React, { useState } from 'react';
import './App.scss';
import SearchForm from './components/SearchForm';
import ListOfBooks from './components/ListOfBooks';

function App() {
  const [books, setBooks] = useState([]);

  return (
    <main role="main" className="app">
      <header className="app_header">
        <h1 className="app_header-title">Books list</h1>
      </header>
      <SearchForm handleData={(results) => {
        setBooks(results);
      }} />
      <div className="book">
        {books.map((book, index) => (
          <ListOfBooks book={book} key={index} index={index} />
        ))}
      </div>
    </main>
  );
}

export default App;

