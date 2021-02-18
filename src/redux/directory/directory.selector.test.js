import { selectDirectory } from './directory.selectors';

describe('Directory Selector', () => {
  const mockState = {
    shop: {},
    directory: {sections: []}
  }

  it('Selects the directory from state.', () => {
    expect(selectDirectory(mockState)).toBe(mockState.directory)
  });
});
