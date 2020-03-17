import React, { useState } from 'react'
import axios from 'axios'

function Form(props) {
    const [value, setValue] = useState();
    const requestData = async (e) => {
        e.preventDefault()
        const searchBooks = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`);
        props.handleData(searchBooks.data.items);
    }
    return (
        <section>
            <form className='form'>
                <label className="form__label" htmlFor="searchbox">
                <input className="form__searchbox" id="searchbox"  type="text" placeholder="Search for books..." onChange={e => { setValue(e.target.value) }}></input>
                <input className="form__submit" type="submit" onClick={e => requestData(e)} value="Search"></input>
                </label>
            </form>
        </section>
    )
}

export default Form
