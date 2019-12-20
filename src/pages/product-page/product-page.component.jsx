import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectCollectionsForPreview} from '../../redux/shop/shop.selector';

import  { addItem } from '../../redux/cart/cart.actions';
 
import './product-page.styles.scss'
import CustomButton from '../../components/custom-button/custom.button.component';
import { collectionChooser } from './related-products-helper';
import CollectionItem from '../../components/collection-item/collection-item.component';

const ProductPage = ({...props}) => {
  const { productName, price, imageUrl }  = props.location.state;
  const item = props.location.state.item;

  const handleCustomClick = (e) => {
    // e.preventDefault();
    props.dispatch(addItem(item));
  }

  const goBack = () => {
    props.history.goBack();
  };

  const relatedItems = collectionChooser(props.collections);
  console.log("rlated items", relatedItems.item0);

  return (
    <div className='product-page--container'>
      <div className='product-page'>
        <div
          className='product-page--image'
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        <div className='product-page--info-container'>
          <div className='product-page--name-container'>
            <h3>{productName}</h3>
            <span>${price}</span>
          </div>

          <div>
            <div className='product-page--size-select'>
              <button className='product-page--select-button'>S</button>
              <button className='product-page--select-button'>M</button>
              <button className='product-page--select-button'>L</button>
              <button className='product-page--select-button'>XL</button>
            </div>
          </div>


          <div className='product-page--CTA'>
          <CustomButton onClick={ handleCustomClick }>
          Add to cart
        </CustomButton>
          </div>

          <div className="product-page--copy">
            <p>These <span>{productName}s</span> were hand selected by our stylists to be added to our certified drip collection. That means you can go wrong by wearing one of these. All of our products include a money back guarantee and free shipping.</p>
          </div>
        </div>
      </div>



      <div className='product-page-back-button__container'>
        <button className='product-page--back-button' onClick={goBack}>
          Go Back
        </button>
      </div>

      <div className='products-page__related-products'>
        <h3>Customers Also Bought</h3>
        <div className='products-page__related-products--container'>
          <CollectionItem className='products-page__related-products--flex-item' item={relatedItems.item0}></CollectionItem>
          <CollectionItem className='products-page__related-products--flex-item' item={relatedItems.item1}></CollectionItem>
          <CollectionItem className='products-page__related-products--flex-item' item={relatedItems.item2}></CollectionItem>
        </div>
      </div>





    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);