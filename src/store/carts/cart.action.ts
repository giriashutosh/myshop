import { CategoryItem } from "../categories/category.type";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { createActionReducer, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.util";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
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
  
  const removeCartItem = (cartItems: CartItem[], productToRemove: CategoryItem): CartItem[] => {
    const existItem = cartItems.find((item) => item.id === productToRemove.id);
  
    if (existItem &&existItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
  
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

  const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  };

export type SetCartIsOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;
  export const setIsCartOpen = withMatcher((boolean: boolean): SetCartIsOpen => 
    //return createActionReducer(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean)
    createActionReducer(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
    ) //{type: "cart/SET_IS_CART_OPEN", payload: boolean}
  
  export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems =>
  createActionReducer(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);
  export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems)//{type: "cart/SET_CART_ITEMS", payload: newCartItems}//createActionReducer(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
  };    

 export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    //return createActionReducer(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
    return setCartItems(newCartItems)//{type: "cart/SET_CART_ITEMS", payload: newCartItems}
  };

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    //return createActionReducer(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
    return setCartItems(newCartItems)//{type: "cart/SET_CART_ITEMS", payload: newCartItems}
  };

  