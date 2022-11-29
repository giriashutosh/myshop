import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { setCurrentUser } from "./store/user/user.action";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { getCategoriesAndDocuments } from "./utils/firebase/firebase.utils"
//import USER_ACTION_TYPES from "./store/user/user.types";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      
      dispatch({type: 'category/SET_CATEGORIES_MAP', payload: categoriesArray})
      
      
    };
    getCategoriesMap();
  }, [dispatch]);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      //dispatch(setCurrentUser(user));
      dispatch({type:'user/SET_CURRENT_USER', payload: user});

      // console.log(setCurrentUser(user));
      // console.log(user)
    });
    return unsubscribe;
  }, [dispatch]);

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
