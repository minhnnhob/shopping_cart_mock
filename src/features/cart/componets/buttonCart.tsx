import { useDispatch, useSelector } from "react-redux";
import { CheckoutButton, ContinueShoppingButton } from "./Cart.styled";
import { RootState } from "../../../stores/store";
import axios from "axios";
import { clearCart } from "../../../stores/cartSlice";
import { useNavigate } from "react-router";

const ButtonCart = () => {
  const navigate = useNavigate();

  const cart = useSelector((state: RootState) => state.cart.item);
  const dispatch = useDispatch();

  const payload = {
    paySuccess: true,
    productsInOrder: cart.map((cartItem) => ({
      productId: cartItem.product.productId,
      quantity: cartItem.quantity,
    })),
  };

  const handleCheckout = () => {
    axios
      .post("http://localhost:4000/api/checkout", payload)
      .then((res) => {
        console.log(res.data);
        const userConfirmation = window.confirm("Do you want to purchase?");
        if (userConfirmation) {
          alert("Thank you for Purchase!!!");
        }
        dispatch(clearCart());
        navigate("/products");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleContinueShopping = () => {
    // Add your logic for continuing shopping here
    console.log("Continuing shopping...");
  };

  return (
    <div>
      <div>
        <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
      </div>
      <div>
        <ContinueShoppingButton onClick={handleContinueShopping}>
          Continue Shopping
        </ContinueShoppingButton>
      </div>
    </div>
  );
};

export default ButtonCart;
