import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

//The Object.keys() method returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionURLParam => 
createSelector(
  [selectCollections],
  collections => collections[collectionURLParam]
);