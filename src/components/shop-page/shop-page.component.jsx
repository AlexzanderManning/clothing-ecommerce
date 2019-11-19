import React from 'react';
import SHOP_DATA from './shop.data';
import './shop-page.styles.scss';
import CollectionPreview from '../preview-collection/collection-preview.component';

//Shop is a class component because we need to store the data for our collections on our shop page.
class ShopPage extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      collections : SHOP_DATA
    }
  }

  render(){
    //ES6 way of destructuring
    // const {collections} = this.state;
    console.log(this.state.collections);
    return(
      <div className='ShopPage'>
        {
          //ES6 Way of destructuring.
          // this.state.collections.map(({id, ...otherCollectionProps}) =>(
          //   <CollectionPreview key={id} {...otherCollectionProps}/>
          // ))

          this.state.collections.map(({id, ...otherCollectionProps}) =>(
            <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
        }
      </div>
    );
  }
}

export default ShopPage;

