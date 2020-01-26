import React, { useState } from 'react';
import './App.scss';
import Form from './components/Form';
import Book from './components/Book';

function App() {
  const [books, setBooks] = useState([]);

  return (
    <main role="main" className="app">
      <header className="app_header">
        <h1 className="app_header-title">Books list</h1>
      </header>
      <Form handleData={(results) => {
        setBooks(results);
      }} />
      <div className="book">
        {books.map((book, index) => (
          <Book book={book} key={index} index={index} />
        ))}
      </div>
    </main>
  );
}

export default App;

