import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { Link } from 'react-router-dom';


import Logo from '../logo/logo.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutCurrentUser } from '../../redux/user/user.actions';
import './header.styles.scss';

//TODO: Add Smoother UI for Signing out. Maybe spinner? or Success message?
const handleSignout = (cb) => {
   cb();
  alert("Signed out!")
}

const Header = ({ currentUser, hidden, signOutCurrentUser }) => (
  <div className='headerContainer'>
    <Link className='logoContainer' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='optionsContainer'>
      <Link className='optionLink' to='/shop'>
        SHOP
      </Link>
      {currentUser ? (
        <div className='optionDiv' onClick={() => handleSignout(signOutCurrentUser)}>
          SIGN OUT
        </div>
      ) : (
        <Link className='optionLink' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden : selectCartHidden
});

export default connect(mapStateToProps, { signOutCurrentUser })(Header);