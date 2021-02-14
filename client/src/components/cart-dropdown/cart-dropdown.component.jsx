import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom.button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
