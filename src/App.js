import React, { useState } from 'react';
import './App.css';
import SearchBooks from './components/SearchBooks';

function App() {
  const [books, setBooks] = useState([]);

  const listOfBooks = books ? (
    books.map((book, index) => {
      return <div key={index}>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="front cover of book"></img>
        <h2>{book.volumeInfo.title}</h2>
        <p>Author:{book.volumeInfo.authors}</p>
        <p>Publisher:{book.volumeInfo.publisher}</p>
        <button>Add to favourites</button>
      </div>
    })) : "Unfortunately an error has occurred, books are currently unavailable"

  return (
    <main role="main" className="App">
      <header className="App-header">
        <h1>Books list</h1>
      </header>
      <SearchBooks handleData={(results) => {
        setBooks(results);
      }} />
      {listOfBooks}
    </main>
  );
}

export default App;

