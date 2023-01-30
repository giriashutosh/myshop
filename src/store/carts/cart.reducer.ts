import { AnyAction } from "@reduxjs/toolkit";
import { CartItem } from "./cart.types";
import { setIsCartOpen, setCartItems } from "./cart.action";

export type CartState = {
  isCartOpen: Boolean;
  cartItems: CartItem[];
}
const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
   
  };

export const cartReducer = (state = CART_INITIAL_STATE, action = {} as AnyAction) => {
    
    if(setIsCartOpen.match(action)){
      return {
               ...state,
               cartItems: action.payload,
             };
    }

    if(setCartItems.match(action)){
      return{
        ...state,
        cartItems: action.payload
      }
    }
    return state;
    // switch (type) {
    //   case "cart/SET_CART_ITEMS":
    //     return {
    //       ...state,
    //       cartItems: payload,
    //     };
    //   case "cart/SET_IS_CART_OPEN":
    //     return{
    //       ...state,
    //       isCartOpen: payload,
    //     }
      
    //   default:
    //       return state
    //       }
  };
