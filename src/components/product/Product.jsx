import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import CartModel  from '../../models/CartModel';
import Cart from '../Cart';

import ProductRow from './ProductRow';
import './product.css';

import { fetchCollectionStartAsync } from '../../redux/product/product.actions';
import { addToCart } from '../../redux/cart/cart.actions';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false
    }
    this.addToBasket = this.addToBasket.bind(this);
  }

  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  addToBasket(product) {
    console.log('addToBasket()');
    const { addToCart } = this.props;
    const cart_item = new CartModel({ product_id: product.sku, name: product.name, price: product.price });
    addToCart(cart_item);
  }

  checkout() {
    console.log('checkout()');
    this.setState({
      checkout: true
    }); 
  }

  renderCheckoutBtn() {
    if (!this.props.cart_items.length) {
      return null;
    }
    return (this.state.checkout ? 
    (<Navigate to="/checkout" replace={false} />) : 
    (<button onClick={() => this.checkout()}>Go To Checkout</button>))
  }

  render() {
    const { collections, cart_items } = this.props;
    return (
      <React.Fragment>
        { cart_items.length ? <Cart cart_items={cart_items} /> : null }
        <div className='products'>
          { collections.map((product) => <ProductRow key={product.sku} product={product} addToBasket={this.addToBasket} />)}
        </div>
        <div>
          { this.renderCheckoutBtn() }
        </div>
      </React.Fragment>
    )
  }
}


const mapStateToProps = (states) => {
  const { collections, isFetching, errorMessage } = states.products;
  return {
    collections,
    isFetching,
    errorMessage,
    cart_items: states.cart.cart_items
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
  addToCart: (cart_item) => dispatch(addToCart(cart_item))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
