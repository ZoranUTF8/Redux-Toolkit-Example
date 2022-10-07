import CartItem from "../CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { toggleModal } from "../../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cartStore);

  return amount < 1 ? (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>Your bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>
    </section>
  ) : (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>Your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      {/* cart footer */}
      <footer>
        <div className="cart-total">
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch(toggleModal())}
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
