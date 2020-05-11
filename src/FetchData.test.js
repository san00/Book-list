import React from 'react'
import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'


import { findByTestAttr } from '../tests/testUtils'
import FetchData from './components/FetchData'


Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Setup function for FetchData component
 * @returns {ReactWrapper}
 */ 
const setup = (props = {}, state = 'null') => {
    return mount(<FetchData {...props} />)
}

test('component renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-FetchData')
    expect(component.length).toBe(1)
})





// describe('When page loads, get data from the API', () => {
    // test.only('state updates with data recieved', async () => {
    
    //     const data = 
    //     {    
    //     searchBooks:jest.fn(()=>{
    //         Promise.resolve('umbrella')
    //     })
    //    }
    //    await expect(data.searchBooks('umbrella')).resolves.toBe('umbrella')

    // })
 
// })

// test.only('call to axios returns data', async () => {
// const data = 
//     {    
//     FetchData:jest.fn(()=>{
//         Promise.resolve( {FetchData: [{name:'cat'}] })
//     })

//    }
//    await expect(data.FetchData('cat')).resolves.toBe({FetchData: [{name:'cat'}] })
// console.log(data);

// })
