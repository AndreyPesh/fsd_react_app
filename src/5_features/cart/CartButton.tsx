import { useNavigate } from 'react-router-dom';
import CartCounter from './CartCounter';
import { Links } from '1_app/types/enum';

const CartButton = () => {
  const navigate = useNavigate();

  const cartPageHandler = () => {
    navigate(Links.cart);
  };

  return (
    <span className="cart-button" onClick={cartPageHandler}>
      Cart
      <CartCounter />
    </span>
  );
};

export default CartButton;
