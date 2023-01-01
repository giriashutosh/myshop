import { Route, Routes } from "react-router-dom";
//import { useEffect } from "react";
//import { useDispatch } from 'react-redux';

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
//import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';


import "./shop.styles.scss";
const Shop = () => {
  //const dispatch = useDispatch();

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoriesArray = await getCategoriesAndDocuments();
      
  //     dispatch({type: 'category/SET_CATEGORIES_MAP', payload: categoriesArray})
      
      
  //   };
  //   getCategoriesMap();
  // }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
