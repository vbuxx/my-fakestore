import { ActionTypes } from "../constants/action-types";
import { SELECTED_PRODUCT } from "./initialState";
const INITIAL_STATE = {};

export const selectedProductReducer = (
  state = SELECTED_PRODUCT,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
