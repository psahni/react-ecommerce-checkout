import React, { useEffect, useState } from 'react';

const Cart = ({ cart_items }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    console.log('useEffect()');
    const q = cart_items.reduce((sum, ci) => sum + ci.quantity, 0);
    setQuantity(q);
  });

    return (
      <div>
        Basket { quantity }
      </div>
    )
}

export default Cart;