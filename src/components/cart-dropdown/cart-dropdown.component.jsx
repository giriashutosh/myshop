import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";

import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles.jsx";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate();
  
  const goToCheckOutHandler = () => {
    navigate('/checkout')
  }
  console.log(cartItems);
  return (
    <CartDropdownContainer>
      <CartItems>
      {
        cartItems.length ? (cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))) : (<EmptyMessage>Your cart is empty</EmptyMessage>)
      }
        
      </CartItems>

      
        <Button onClick = {goToCheckOutHandler}>CHECKOUT</Button>
      
    </CartDropdownContainer>
  );
};

export default CartDropdown;
