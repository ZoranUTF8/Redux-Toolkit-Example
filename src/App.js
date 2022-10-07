import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/CartContainer/CartContainer";
import Modal from "./components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { updateTotalAmount, getCartItems } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cartStore);
  const { isModalOpen } = useSelector((state) => state.modalStore);

  //? Update total amount on shopping cart change
  useEffect(() => {
    dispatch(updateTotalAmount());
  }, [cartItems]);

  //? Fetch cart items on application load
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  {
    isLoading && (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isModalOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
