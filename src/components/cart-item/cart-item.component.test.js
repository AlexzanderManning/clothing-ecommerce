import { shallow } from "enzyme";
import "jest-enzyme";

import React from 'react';
import CartItem from './cart-item.component';

describe('Cart Item Component', () => {
  const mockItem = {
    item: {
    name: "Brown Brim",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: 25,
    quantity: 1
    }
  };

  const wrapper = shallow(<CartItem {...mockItem} />);

  it('renders to dom without crashing.', () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  })
})
