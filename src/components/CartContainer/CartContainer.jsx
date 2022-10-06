import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
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
        <button className="btn clear-btn">Clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
