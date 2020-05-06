import React from 'react'

function SearchData({ handleChange, handleSubmit }) {

    return (
        <section data-test='component-searchData'>
            <form className='form' onSubmit={handleSubmit}>
                <label className='form__label' htmlFor='searchbox'>
                    <input className='form__searchbox'
                        id='searchbox' type='text'
                        placeholder='Search books'
                        onChange={handleChange}
                    ></input>
                    <input className='form__submit button' type='submit'></input>
                </label>
            </form>
        </section>
    )
}

export default SearchData
