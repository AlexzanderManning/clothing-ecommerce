import { addItemToCart, removeItemFromCart } from "./cart.utils";

describe("Add item to cart utility function.", () => {
  const cartItems = [
    { id: 1, quantity: 1 },
    { id: 2, quantity: 2 },
  ];

  it("Adds a new item to the cart", () => {
    expect.assertions(1);
    expect(addItemToCart(cartItems, { id: 3, quantity: 1 })).toEqual([
      ...cartItems,
      { id: 3, quantity: 1 },
    ]);
  });

  it("updates the quantity of an item, if the item matches an item that is already in the cart", () => {
    expect.assertions(1);
    expect(addItemToCart(cartItems, { id: 1, quantity: 1 })).toEqual([
      { id: 1, quantity: 2 },
      { id: 2, quantity: 2 },
    ]);
  });
});

describe("Remove Item from cart utility function", () => {
  const cartItemsRemove = [
    { id: 1, quantity: 1 },
    { id: 2, quantity: 2 },
  ];

  it("Removes an item from the cart if the quantity is <= 1.", () => {
    expect.assertions(1);
    expect(
      removeItemFromCart(cartItemsRemove, { id: 1, quantity: 1 })
    ).toEqual([{ id: 2, quantity: 2 }]);
  });

  it("It decrements the quantity if the quantity is > 1.", () => {
    expect.assertions(1);
    expect(
      removeItemFromCart(cartItemsRemove, { id: 2 })
    ).toEqual([{ id: 1, quantity: 1 },{ id: 2, quantity: 1 }]);
  });
});
