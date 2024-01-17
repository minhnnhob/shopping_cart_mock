
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';


const NavBar: React.FC = () => {
  const cartItemCount = useSelector((state: RootState) => state.cart.items.length);
  const style = ({ isActive }: { isActive: boolean }) => {
    return {
      fontSize: "1.2rem",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: "none",
      color: isActive ? "Black" : "gray",
    };
  };

  return (
    <div className="container" style={{ display: "flex" , justifyContent:"space-between", paddingTop:"1rem", alignItems:"center"}}>
      <div
        style={{
          display: "flex",
          width: "20%",
          justifyContent: "space-between",
          marginLeft: "2rem",
        
        }}
      >
        <div>
          <NavLink style={style} to="/home">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/products" style={style}>
            Products
          </NavLink>
        </div>
        <div>
          <NavLink to="/review" style={style}>
            Review
          </NavLink>
        </div>
      </div>

      <div className="logo" style={{fontWeight:"800",fontSize:"1.5rem", color:"#3B82F6"}}>Beauty.bd</div>
      
      <NavLink to="/cart" style={{ textDecoration: "none" }}>
        <div className="cartIcon" style={{ marginRight: "2rem", position: 'relative' }}>
          <i className="ri-shopping-cart-2-fill " style={{color:"#3B82F6", fontSize:"2rem"}}></i>
          {cartItemCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '0',
              right: '0',
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {cartItemCount}
            </span>
          )}
        </div>
      </NavLink>
    </div>
  );
};
export default NavBar;
