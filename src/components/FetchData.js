import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SearchData from './SearchData'
import DisplayData from './DisplayData'

function FetchData() {
    const [results, setResults] = useState([])
    const [query, setQuery] = useState('giraffe')
    const [error, setError] = useState(null)

    const searchBooks = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            setResults(response.data.items);
        }
        catch (error) {
            setError(error)
        }
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
        <section data-test='component-FetchData'>
            <SearchData handleSubmit={handleSubmit} handleChange={handleChange} />
            <DisplayData results={results} error={error} />
        </section>
    )
}

export default FetchData
