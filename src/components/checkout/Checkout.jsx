import React from 'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router-dom';

import { applyPromoCode } from '../../redux/promocode/promocode.actions';
import { processCheckout } from '../../redux/checkout/checkout.actions';

const cardNumber = '5598208090357951';

const CheckoutItemRow = ({ cart_item }) => {
  return (
    <div>
      <div>
        <span>{ cart_item.name }</span>
        <span>{ cart_item.price }</span>
        <span>Remove</span>
      </div>
    </div>
  )
}

class Checkout extends React.Component {
    promocode = { value: ''};
    
    constructor(props) {
      super(props);
      const { cart_items, promocode }  = this.props;
      
      this.state = {
        validOrder: false,
        total_price: this.calculateTotalPrice(cart_items, promocode.discount)
      }
    }

    calculateTotalPrice(cart_items, discount) {
      let total = cart_items.reduce((sum, ci) => sum + ci.price*ci.quantity, 0);
      total = total - (total*discount.amount)/100;
      return total.toFixed(2);
    }

    checkout() {
      console.log('checkout()');
      const { cart_items }  = this.props;
      console.log(processCheckout);
      processCheckout(cart_items, cardNumber);
      return true;
    }

    render() {
      const { cart_items, applyPromoCode, promocode, processCheckout } = this.props;
      return (
        <React.Fragment>
          <div>
            { cart_items.map((ci) => <CheckoutItemRow key={ci.product_id} cart_item={ci}/>)}
          </div>
          <div>

          </div>
          <div className='form'>
            <form onSubmit={evt => { evt.preventDefault(); applyPromoCode(this.promocode.value) }}>
              <div className='error'>{ promocode.errors.msg }</div>
              <label>Promocode</label>
              <input type='text' defaultValue={promocode.value} ref={n => { this.promocode = n }} />
              <button type='submit'>Apply</button>
            </form>
          </div>
          <div>
            Discount: { promocode.discount.amount }
          </div>
          <div>
            <span>Basket Total = { this.state.total_price }</span>
          </div>
          <div>
            <button onClick={() => processCheckout(cart_items, cardNumber)}>Checkout</button>
          </div>
          <Link to='/'>Continue Shopping</Link>
        </React.Fragment>
      )
    }
}

const mapStateToProps = (states) => {
  return {
    cart_items: states.cart.cart_items,
    promocode: states.promocode
  }
}

const mapDispatchToProps = (dispatch) => ({
  applyPromoCode: (promocode) => dispatch(applyPromoCode(promocode)),
  processCheckout: (cart_items, cardNumber) => dispatch(processCheckout(cart_items, cardNumber))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
