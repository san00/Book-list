import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SearchData from './SearchData'
import DisplayData from './DisplayData'

function FetchData() {
    const [results, setResults] = useState([])
    const [query, setQuery] = useState('giraffe')

    const searchBooks = async () => {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        setResults(response.data.items);
    }

    useEffect(() => {
        searchBooks()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        searchBooks()
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <section>
            <SearchData handleSubmit={handleSubmit} handleChange={handleChange} />
            <DisplayData results={results} />
        </section>
    )
}

export default FetchData
