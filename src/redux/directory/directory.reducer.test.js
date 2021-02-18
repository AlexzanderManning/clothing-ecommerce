import directoryReducer, {INITIAL_STATE} from './directory.reducer';

describe('The Directory Reducer', () => {
  it('Returns the initial state', () => {
    expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE)
  });
});
