import React from 'react';

class Cart extends React.Component {
  render() {
    const quantity = this.props.cart_items.reduce((sum, ci) => sum + ci.quantity, 0);
    return (
      <div>
        Basket { quantity }
      </div>
    )
  }
}

export default Cart;
