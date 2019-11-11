import React, { useState } from 'react';
import './App.scss';
import SearchBooks from './components/SearchBooks';

function App() {
  const [books, setBooks] = useState([]);

  const listOfBooks = books ? (
    books.map((book, index) => {
      return <article className="book__container" key={index}>
        <img className="book__image" src={book.volumeInfo.imageLinks.thumbnail} alt="front cover of book"></img>
        <h2 className="book__title">{book.volumeInfo.title}</h2>
        <p className="book__author">Author:{book.volumeInfo.authors}</p>
        <p className="book__publisher">Publisher:{book.volumeInfo.publisher}</p>
        <button className="book__button">Add to favourites</button>
      </article>
    })) : "Unfortunately an error has occurred, books are currently unavailable"

  return (
    <main role="main" className="app">
      <header className="app_header">
        <h1 className="app_header-title">Books list</h1>
      </header>
      <SearchBooks handleData={(results) => {
        setBooks(results);
      }} />
      <div className="book">{listOfBooks}</div>
    </main>
  );
}

export default App;

