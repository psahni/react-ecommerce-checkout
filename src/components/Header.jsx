const getText = () => {
  const path = window.location.pathname;
  if (path.match('checkout')) {
    return 'Basket / Checkout View'
  }
  return 'Product List View';
}

const Header = () => {
  return (
    <header>
      { getText() }
    </header>
  )
}

export default Header;
