import React, { useState } from 'react'
import axios from 'axios'

function SearchBooks(props) {
    const [value, setValue] = useState();
    const requestData = async (e) => {
        e.preventDefault()
        const searchBooks = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`);
        props.handleData(searchBooks.data.items);
    }
    return (
        <section>
            <form className='form'>
                <label className="form__label" htmlFor="form">Search books</label>
                <input className="form__input-text" type="text" placeholder="search books..." onChange={e => { setValue(e.target.value) }}></input>
                <input className="form__input-submit" type="submit" onClick={e => requestData(e)}></input>
            </form>
        </section>
    )
}

export default SearchBooks
