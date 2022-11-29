import { createActionReducer } from "../../utils/reducer/reducer.util";
import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
   
  };
  const addCartItem = (cartItems, productToAdd) => {
    //find cartItems contains productToAdd
    const existItem = cartItems.find((item) => item.id === productToAdd.id);
    //if exist just increase the quantity
    if (existItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    //return new array with modified cartItems/ new cart item
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  
  const removeCartItem = (cartItems, productToRemove) => {
    const existItem = cartItems.find((item) => item.id === productToRemove.id);
  
    if (existItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
  
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
  
    switch (type) {
      case CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
          ...state,
          cartItems: payload,
        };
      case CART_ACTION_TYPES.SET_IS_CART_OPEN:
        return{
          ...state,
          isCartOpen: payload,
        }
      default:
        throw new Error(`unhandled type of ${type} in cartReducer`);
    }
  };
  const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  };
  export const setIsCartOpen = (boolean) => {
    createActionReducer(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean)
  }
  export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createActionReducer(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
  };    

 export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createActionReducer(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
    
  };

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createActionReducer(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
    
  };

  