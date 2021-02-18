import {createSelector} from 'reselect';

export const selectUser = (state = {currentUser: null}) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user = { currentUser: null }) => user.currentUser
);