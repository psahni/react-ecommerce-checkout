class CartModel {
  constructor({ product_id, price, name }) {
    this.quantity = 1;
    this.product_id = product_id;
    this.price = price;
    this.name = name;
  }
}

export default CartModel;

