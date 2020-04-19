import React from 'react'

import DisplayItem from './DisplayItem'

function DisplayData({ results }) {
    const displayResults = results ? (results.map((book, index) => {
        return (
            <DisplayItem
                book={book}
                key={book.id}
                index={index} />
        )
    })) : <h2>'Unable to load books'</h2>

    return (
        <section className='book' >
            {displayResults}
        </section>
    )
}

export default DisplayData
