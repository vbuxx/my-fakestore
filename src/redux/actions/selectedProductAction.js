import { ActionTypes } from "../constants/action-types";

export const setSelectedProduct = (product) => {
  return {
    type: ActionTypes.SET_SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
