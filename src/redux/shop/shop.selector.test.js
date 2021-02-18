import { selectShop } from './shop.selector';
import SHOP_DATA from './shop.data';


describe("Shop Reducer Selector", () => {
  const mockState = {
    user: {},
    cart: {},
    directory: {},
    shop: SHOP_DATA,
  };

  it("Selects collections from the Shop Reducer.", () => {
    expect.assertions(1);
    expect(selectShop()).toEqual(mockState.shop);
  });
});
