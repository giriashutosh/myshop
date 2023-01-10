import Button, {BUTTON_TYPE_CLASSES} from "../button/button";

import { addItemToCart } from "../../store/carts/cart.reducer";

import "./product-card.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/carts/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const addProductToCart = () => {
    console.log(addItemToCart(cartItems, product));
    dispatch(addItemToCart(cartItems, product))
  }
  // const addItemHandler = () => {
  //   addItemToCart(product);
  // }
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
