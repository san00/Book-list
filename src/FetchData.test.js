import React from 'react'
import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr } from '../tests/testUtils'
import FetchData from './components/FetchData'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Setup function for FetchData component
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = 'null') => {
    return mount(<FetchData {...props} />)
}

test('FetchData renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-FetchData')
    expect(component.length).toBe(1)
})