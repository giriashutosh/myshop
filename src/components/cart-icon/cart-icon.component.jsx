import {ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector.js";

const CartIcon = () => {
  
 const dispatch = useDispatch();
 
 const cartCount = useSelector(selectCartCount)
 console.log(cartCount)
 const isCartOpen = useSelector(selectIsCartOpen)
 //console.log(isCartOpen)
 const toggleIsCartOpen = () => dispatch({type: "cart/SET_IS_CART_OPEN", payload: !isCartOpen})//dispatch(setIsCartOpen(!isCartOpen));
  
return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
