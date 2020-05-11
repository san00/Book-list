import moxios from 'moxios'

import { mockAxiosCall } from './hookActions'


describe('moxios test', () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })


    test('calls api & gets response from axios', async () => {
        const bookData = 'cats'

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: bookData,
            })
        })

        // Create mock for callback arg
        const mockData = jest.fn()

        await mockAxiosCall(mockData)

        // See whether mock was run with correct argument
        expect(mockData).toHaveBeenCalledWith(bookData)
    })

    // test('Error is returned if no api response', async () => {
    //     const error = 'Error'

    //     moxios.wait(() => {
    //         const request = moxios.requests.mostRecent()
    //         request.respondWith({
    //             status: 501,
    //             response: error,
    //         })
    //     })

    //     // Create mock for callback arg
    //     const mockError = jest.fn()

    //     await mockAxiosCall(mockError)

    //     // See whether mock was run with correct argument
    //     expect(mockError).toHaveBeenCalledWith(error)
    // })

    
})