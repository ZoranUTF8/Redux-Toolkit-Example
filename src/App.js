import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/CartContainer/CartContainer";
import Modal from "./components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { updateTotalAmount } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartStore);
  const { isModalOpen } = useSelector((state) => state.modalStore);

  useEffect(() => {
    dispatch(updateTotalAmount());
  }, [cartItems]);
  return (
    <main>
      {isModalOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
