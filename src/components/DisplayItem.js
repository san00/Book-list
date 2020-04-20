import React from 'react'

function DisplayItem({ book, index }) {

    const setData = () => {
        localStorage.setItem('favourites', JSON.stringify(book));
    };

    const addFavourites = () => {
        const stored = JSON.parse(localStorage.getItem('favourites'))
        const favouriteBook = [];
        favouriteBook.push(book);
        setData(stored);
    }

    return (book.volumeInfo.hasOwnProperty('imageLinks') === false ? (<p>Book currently unavailable</p>) :
        <article className='book__container' key={index} index={index}>
            <img className="book__image" src={book.volumeInfo.imageLinks.thumbnail} alt='front cover of book'></img>
            <p className='book__title'><b>{book.volumeInfo.title ? book.volumeInfo.title : 'Unavailable'}</b></p>
            <p className='book__author'>Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unavailable'}</p>
            <p className='book__publisher'>Publisher: {book.volumeInfo.publisher ? book.volumeInfo.publisher : 'Unavailable'}</p>
            <button className='book__button button' onClick={() => addFavourites()}>Add to favourites</button>
        </article>
    )
}

export default DisplayItem
