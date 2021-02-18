import { setCurrentUser, signOutCurrentUser } from "./user.actions";
import userReducer from "./user.reducer";
import { selectUser, selectCurrentUser } from './user.selector';

describe("User Reducer", () => {
  const INITIAL_STATE = {
    currentUser: null,
  };

  it("returns inital state", () => {
    expect.assertions(1);
    expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("sets a new user", () => {
    expect.assertions(1);
    expect(userReducer(undefined, setCurrentUser("alex"))).toEqual({
      ...INITIAL_STATE,
      currentUser: "alex",
    });
  });

  it("it logs out a user", () => {
    expect.assertions(1);
    expect(userReducer(undefined, signOutCurrentUser("alex"))).toEqual({
      ...INITIAL_STATE,
      currentUser: null,
    });
  });
});

describe('User Reducer Selector', () => {
  const mockState = {
    user: {currentUser: null},
    cart: {},
    directory: {},
    shop:{}
  }

  it('Selects the user reducer from the state.', () => {
      expect.assertions(1);
    expect(selectUser(mockState)).toEqual({currentUser : null});
  })

  it('Selects the user from the user reducer', () => {
     expect.assertions(1);
    expect(selectCurrentUser()).toEqual(null)
  })
})
