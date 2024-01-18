import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../stores/cartSlice'; // Make sure to import the 'remove' action from your cart slice

export const useCartActions = () => {
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };
  return { handleRemove };
}