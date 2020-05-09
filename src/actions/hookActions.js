import axios from 'axios'

export const mockAxiosCall = async (setResults) => {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=books')
    setResults(response.data)
}

// default export for mocking convenience
export default {
    mockAxiosCall,
}