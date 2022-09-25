import { ActionTypes } from "../constants/action-types";
import {
  initialState,
  CART,
  PRODUCTS,
} from "./initialState";

export const cartReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart:
          state.cart.length == 0
            ? [{ ...item, qty: 1 }]
            : inCart
            ? state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
      };
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case ActionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    case ActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: parseInt(item.qty, 10) + 1 }
            : item
        ),
      };
    case ActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? item.qty > 1
              ? { ...item, qty: parseInt(item.qty, 10) - 1 }
              : { ...item, qty: 1 }
            : item
        ),
      };
    default:
      return state;
  }
};
