import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
const Navbar = () => {
  const amount = useSelector((store) => {
    return store.cart.amount;
  });
  console.log("🚀 ~ file: navbar.js ~ line 7 ~ amount ~ amount", amount);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount ">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
