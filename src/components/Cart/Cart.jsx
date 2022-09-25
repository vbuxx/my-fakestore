import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  adjustItemQty,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../redux/actions/cartAction";
import Container from "../sub-components/Container";
import trash from "../../assets/trash.png";

const Cart = ({
  cart,
  adjustItemQty,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  const itemList = cart.map((item, id) => {
    return (
      <div className="flex item gap-4" key={id}>
        <img src={item.image} alt="" className="w-1/5" />
        <div className="flex flex-col">
          <span className="text-xl font-bold truncate ">
            {item.title}
          </span>
          <div className="flex my-4">
            <button
              className="btn btn-primary btn-circle font-bold justify-center items-center"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>
            <input
              type="number"
              id="qty"
              name="qty"
              value={item.qty}
              onChange={(e) =>
                adjustItemQty(item.id, e.target.value)
              }
              className="w-12 text-center text-xl"
            />
            <button
              className="btn btn-primary btn-circle font-bold justify-center items-center"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
            <img
              src={trash}
              alt="delete"
              className="w-10 mx-4 cursor-pointer hover:opacity-70"
              onClick={() => removeItem(item.id)}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <Container>
      <div className="flex gap-8">
        <div className="flex flex-col my-8 p-8 gap-8 shadow-xl rounded-xl">
          {cart.length > 0 && itemList}
        </div>
        <div className="flex flex-col my-8 p-8 gap-8 shadow-xl rounded-xl w-1/5 h-72">
          <div className="font-bold text-lg">Checkout</div>
          <div className="card-actions">
            <Link className="btn btn-primary btn-block">
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return state.cart;
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustItemQty: (itemId, qty) =>
      dispatch(adjustItemQty(itemId, qty)),
    increaseQuantity: (itemId) =>
      dispatch(increaseQuantity(itemId)),
    decreaseQuantity: (itemId) =>
      dispatch(decreaseQuantity(itemId)),
    removeItem: (itemId) => dispatch(removeItem(itemId)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
