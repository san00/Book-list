import React from 'react'

function Book({ book, index }) {

    const setData = () => {
        localStorage.setItem('favourites', JSON.stringify(book));
    };

    const addFavourites = () => {
        const stored = JSON.parse(localStorage.getItem('favourites'))
        const favouriteBook = [];
        favouriteBook.push(book);
        setData(stored);
    }

    return (
        <article className="book__container" key={index} index={index}>
            <img className="book__image" src={book.volumeInfo.imageLinks.thumbnail} alt="front cover of book"></img>
            <h2 className="book__title">{book.volumeInfo.title}</h2>
            <p className="book__author">Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : "Info unavailable"}</p>
            <p className="book__publisher">Publisher: {book.volumeInfo.publisher ? book.volumeInfo.publisher : "Info unavailable"}</p>
            <button className="book__button" onClick={() => addFavourites()}>Add to favourites</button>
        </article>
    )
}

export default Book
