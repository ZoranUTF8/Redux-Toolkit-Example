import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../../icons";
import { removeItem, updateItemCount } from "../../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          Remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => dispatch(updateItemCount({ actionType: "inc", id }))}
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() =>
            amount === 1
              ? dispatch(removeItem(id))
              : dispatch(updateItemCount({ actionType: "dec", id }))
          }
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
