import { createSelector } from 'reselect';
import INITIAL_STATE from  './directory.reducer'

export const selectDirectory = (state = {directory: INITIAL_STATE}) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);