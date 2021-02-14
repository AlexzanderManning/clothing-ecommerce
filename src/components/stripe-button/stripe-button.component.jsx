import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price;
  const publishableKey = 'pk_test_KDjBGuoMlPPDZWoltoGBU7SG00FsHroKxs';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Drip Clothing'
      billingAddress
      shippingAddress
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Letter_d.svg/1200px-Letter_d.svg.png'
      description={`Your total is $${priceForStripe}`}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );

};

export default StripeCheckoutButton;