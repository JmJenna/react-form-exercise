import React from 'react';
import {render} from '@testing-library/react';
import Box from './Box';

it("renders without crashing", function(){
    render(<Box />)
})

it("mathes snapshot", function(){
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
})