import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { selectedProductReducer } from "./selectedProductReducer";

const reducers = combineReducers({
  products: productReducer,
  selectedProduct: selectedProductReducer,
  cart: cartReducer,
});

export default reducers;
