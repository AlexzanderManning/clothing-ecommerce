import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import CustomButton from '../custom-button/custom.button.component';
import  { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) =>{

  const handleClick = (e) => {
    e.preventDefault();
    addItem(item);
  }

  const { imageUrl, name, price} = item;
  return(
    <Link to='/'>
      <div className='collection-item'>
        <div
          className='image'
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>${price}</span>
        </div>
        <CustomButton onClick={ handleClick } inverted>
          Add to cart
        </CustomButton>
      </div>
    </Link>
    
  ) 
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps) (CollectionItem);