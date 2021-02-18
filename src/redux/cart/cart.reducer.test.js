import cartReducer from "./cart.reducer";
import {
  toggleCartHidden,
  openCart,
  addItem,
  clearItem,
  removeItem,
} from "./cart.actions";

describe("Cart Reducer", () => {
  const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
  };

  it("returns the default state", () => {
    expect(cartReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("it toggles the hidden state of the cart", () => {
    expect(cartReducer(INITIAL_STATE, toggleCartHidden())).toEqual({
      ...INITIAL_STATE,
      hidden: !INITIAL_STATE.hidden,
    });
  });

  it("it sets the hidden state of the cart to false", () => {
    expect(cartReducer(INITIAL_STATE, openCart())).toEqual({
      ...INITIAL_STATE,
      hidden: false,
    });
  });

  it("adds items to the cart", () => {
    expect(cartReducer(INITIAL_STATE, addItem([]))).toEqual({
      ...INITIAL_STATE,
      cartItems: [{ quantity: 1 }],
    });
  });

  it("removes item from the cart", () => {
    const MOCK_STATE = {
      hidden: true,
      cartItems: [
        {
          id: 1,
          quantity: 2,
        },
      ],
    };
    const cartItem = {
      id: 1,
      quantity: 2,
    };

    expect(cartReducer(MOCK_STATE, removeItem(cartItem))).toEqual({
      ...INITIAL_STATE,
      cartItems: [
        {
          id: 1,
          quantity: 1,
        },
      ],
    });
  });

  it('Clears items from the cart', () => {
    const MOCK_STATE = {
      hidden: true,
      cartItems: [
        {
          id: 1,
          quantity: 1,
        },
      ],
    };
    const cartItem = {
      id: 1,
      quantity: 1,
    };

    expect(cartReducer(MOCK_STATE, clearItem(cartItem))).toEqual({
      ...INITIAL_STATE,
      cartItems: [],
    });
  })
});
