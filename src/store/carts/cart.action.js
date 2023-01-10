import { CART_ACTION_TYPES } from "./cart.types";
import { createActionReducer } from "../../utils/reducer/reducer.util";

export const setIsCartOpen = (boolean) => 
createActionReducer(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)