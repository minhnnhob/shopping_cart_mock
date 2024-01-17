import { useSelector } from 'react-redux';
import { RootState } from '../../../stores/store';
const CheckoutCart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + Number(item.price), 0) ;
      };

    return (
        <div>
            <div style={{ width: "360px", backgroundColor: " rgba(243,244,246,1)", borderRadius: "8px" }}>
                <div className="container-order" style={{ padding: "10px 20px" }}>
                    <h3 style={{ textAlign: "left" }}>Order Info </h3>

                    <div style={{ display: "flex", justifyContent: "space-between", rowGap: "2px" }}>
                        <p className="subleft" style={{}}>Subtotal: </p>
                        <p className="subright">$0</p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p className="subleft">Shipping Cost: </p>
                        <p className="subright">$0</p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h2>Total: </h2>
                        <h2> ${calculateTotal()}</h2>
                    </div>
                </div>

            </div>

        </div>
    );
};
export default CheckoutCart;