import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { setCurrentUser } from "./store/user/user.action";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
//import { getCategoriesAndDocuments, getCurrentUser } from "./utils/firebase/firebase.utils"
//import { selectIsCartOpen } from "./store/cart/cart.selector";

//import USER_ACTION_TYPES from "./store/user/user.types";
// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
//   //getCurrentUser
// } from "./utils/firebase/firebase.utils";

import { checkUserSession } from "./store/user/user.action";
const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkUserSession())
  },[])
  
  // useEffect(()=>{
  //   getCurrentUser().then((user) => console.log(user))
  // },[])

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
      
  //     dispatch({type:'user/SET_CURRENT_USER', payload: user});
      
  //     console.log("user dispatch")
  //   });
  //   return unsubscribe;
  // }, [dispatch]);

  
  
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
