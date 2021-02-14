import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


import CustomButton from '../custom-button/custom.button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { openCart } from '../../redux/cart/cart.actions';


import './collection-item.styles.scss';


class CollectionItem extends React.Component {
  handleCustomClick = (e) => {
    const { item, addItem, displayCart } = this.props;
    e.preventDefault();
    addItem(item);
    displayCart();
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }



  render() {
    const { item } = this.props;
    const { imageUrl, name, price } = item;
    return (
      <Link className='collection-item' to={{
        pathname: `/products/${name}`,
        state: {
          productName: name,
          price: price,
          imageUrl: imageUrl,
          item: item

        }
      }}>
        <div
          className='image'
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>${price}</span>
        </div>
        <CustomButton onClick={this.handleCustomClick} inverted>
          Add to cart
      </CustomButton>
      </Link>

    )
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  displayCart: () => dispatch(openCart())
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));