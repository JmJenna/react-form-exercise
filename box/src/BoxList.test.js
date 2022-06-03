import React from 'react';
import {render , fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it("renders without crashing", function(){
    render(<BoxList />);
})

it("matches snapshot", function(){
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

function addBox(boxList , width="2", height="2", backgroundColor ="red",){
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundColorInput = boxList.getByLabelText("Background Color");
    fireEvent.change(backgroundColorInput , {target : { value : backgroundColor}});
    fireEvent.change(heightInput , {target : {value : height}});
    fireEvent.change(widthInput , {target : {value : width}});
    const button = boxList.getByText("Add a new box!");
    fireEvent.click(button);
}

it("add a new Box" , function(){
    const boxList = render(<BoxList />);

    expect(boxList.queryByText("Remove The Box!")).not.toBeInTheDocument();

    addBox(boxList);  

    const removeButton = boxList.getByText("Remove The Box!");

    expect(removeButton).toBeInTheDocument();
})

it("remove a box", function(){
  const boxList = render(<BoxList />);

  const removeButton = boxList.getByText("Remove The Box!");

  fireEvent.click(removeButton);
  
  expect(removeButton).not.toBeInTheDocument();
})