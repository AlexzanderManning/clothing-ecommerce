import shopReducer from './shop.reducer';
import { updateCollections } from "./shop.actions";
import SHOP_DATA from './shop.data';

describe("Shop Reducer", () => {
  const INITIAL_STATE = {
    collections: SHOP_DATA
  }

  it("returns inital state", () => {
    expect.assertions(1);
    expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("updates collections", () => {
    expect.assertions(1);
    expect(shopReducer(undefined, updateCollections(SHOP_DATA))).toEqual({
      ...INITIAL_STATE,
      collections: SHOP_DATA,
    });
  });
});
