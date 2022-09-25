import { ActionTypes } from "../constants/action-types";

export const addItem = (itemId) => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      id: itemId,
    },
  };
};

export const removeItem = (itemId) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id: itemId,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: ActionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export function increaseQuantity(itemId) {
  return {
    type: ActionTypes.INCREASE_QUANTITY,
    payload: {
      id: itemId,
    },
  };
}
export function decreaseQuantity(itemId) {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    payload: {
      id: itemId,
    },
  };
}
