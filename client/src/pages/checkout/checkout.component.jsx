import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total, ...props}) => {
  console.log(props)

  return(<div className='checkout-page'>
   <h3>Shopping Cart</h3>

    {
    
      cartItems.length? 

    cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))
    : <span className = 'empty-message'>Your cart is empty.</span>
  
  }

    <div className='total'>
      <span>Total : ${total}</span>
    </div>

    <div className='test-warning'>
      *Please use the following credit card for payments* 
      <br></br>
      <br></br>
      4242 4242 4242 4242 - Expiry : 01/22 - CCV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>);

  
};

  const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartTotal
  });



export default connect(mapStateToProps)(CheckoutPage);