import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
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
      <div className="cartIcon" style={{ marginRight: "2rem",}}>
        <i className="ri-shopping-cart-2-fill " style={{color:"#3B82F6", fontSize:"2rem"}}></i>
      </div>
    </div>
  );
};
export default NavBar;
