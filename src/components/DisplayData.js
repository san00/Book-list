import React from 'react'

import DisplayItem from './DisplayItem'

function DisplayData({ results, error }) {
    const displayResults = results ? (results.map((book, index) => {
        return (
            <DisplayItem
                book={book}
                key={book.id}
                index={index} />
        )
    })) : <h2 className="book__error">'Unable to load books'</h2>

    return (
        <section className='book' >
            {displayResults}
            {error && <h2>{error.message}</h2>}
        </section>
    )
}

export default DisplayData
