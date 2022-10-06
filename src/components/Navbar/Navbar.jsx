import React from "react";
import { CartIcon, TestingIcon } from "../../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cartStore);


  return (
    <nav>
      <div className="nav-center">
        <h3>Navbar</h3>
        <div className="nav-container">
          <TestingIcon />
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
      ;
    </nav>
  );
};

export default Navbar;
