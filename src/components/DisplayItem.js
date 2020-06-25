import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function DisplayItem({ book, index }) {
  const context = useContext(AppContext);

  return book.volumeInfo.hasOwnProperty("imageLinks") === false ? (
    <p className="book__error">Book unavailable</p>
  ) : (
    <article className="book__container" key={index} index={index}>
      <img
        className="book__image"
        src={book.volumeInfo.imageLinks.thumbnail}
        alt="front cover of book"
      ></img>
      <p className="book__title">
        <b>{book.volumeInfo.title ? book.volumeInfo.title : "Unavailable"}</b>
      </p>
      <p className="book__author">
        Author:{" "}
        {book.volumeInfo.authors
          ? book.volumeInfo.authors.join(", ")
          : "Unavailable"}
      </p>
      <p className="book__publisher">
        Publisher:{" "}
        {book.volumeInfo.publisher ? book.volumeInfo.publisher : "Unavailable"}
      </p>
      <button
        className="book__button button"
        onClick={() => {
          context.setFavourites({ ...context.favourites, [book.id]: book });
        }}
      >
        Add to favourites
      </button>
      {context.favourites[book.id] && (
        <p className="book__text-saved">"item saved"</p>
      )}
    </article>
  );
}

export default DisplayItem;
