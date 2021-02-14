import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Directory from '../../components/directory/directory.component';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import './homepage.styles.scss';

//Creating homepage as a fucntional component because we do not need to store state and we dont need any lifecycle methods.
const HomePage = (props) => {
  const { collection } = props;

  const featuredItems = {
      item1: collection[1].items[7],
      item2: collection[2].items[0],
      item3: collection[2].items[1],
      item4: collection[1].items[1]
  };

  console.log(collection);

  return (
    <div className='homepage'>
      <Directory className='' />
      <h2>Featured Products</h2>
      <div className='homepage__featured-products'>
          

        <div className='homepage__featured-products--item1'>
          <div>
              <CollectionItem className='' item={featuredItems.item1}></CollectionItem>
          </div>
          <div>
              <CollectionItem className='' item={featuredItems.item4}></CollectionItem>
          </div>
        </div>
        
        <div className='homepage__featured-products--item2'>
          <div>
              <CollectionItem item={featuredItems.item2}></CollectionItem>
          </div>
          <div>
            <CollectionItem item={featuredItems.item3}></CollectionItem>
          </div>
        </div>
        
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector ({
  collection : selectCollectionsForPreview
});

export default connect(mapStateToProps)(HomePage);
