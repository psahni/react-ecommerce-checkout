import './product.css';

const ProductRow = ({ product, addToBasket }) => {
  return (
    <div className='product'>
      <div>
        <span className='product-name product-col'>{ product.name }</span>
        <span className='product-col'>{ product.price}</span>
        <button onClick={() => addToBasket(product)}>Add To Basket</button>
      </div>
    </div>
  )
}
  
  export default ProductRow;

  