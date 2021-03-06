import React from 'react';
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className='checkout-item'>
        <div className="image-container">
          <img src={imageUrl} alt='item' />
        </div>

        <div className='checkout-item-info-container'>
          <h4 className='name'>{name}</h4>
          <div className='asfdfa'>
            <span className='quantity'>
              <div onClick={() => removeItem(cartItem)} className='arrow'>&#10094;</div>
              <span className='value'>{quantity}</span>
              <div onClick={() => addItem(cartItem)} className='arrow'>&#10095;</div>
            </span>

            <span className='price'>${price}</span>

            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
          </div>
        </div>

     
     
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem : item => dispatch(clearItem(item)),
  addItem : item => dispatch(addItem(item)),
  removeItem : item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);