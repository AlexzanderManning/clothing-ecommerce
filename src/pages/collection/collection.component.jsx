import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({collection, match}) => {
  console.log(collection);

  return(
    <div className='collection-page'>
    <h2>Collection Page</h2>
  </div>
  );
};

//ownProps gives us access to the props of the Component itself
const mapStateToProps = (state, ownProps) => ({
  collection : selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);