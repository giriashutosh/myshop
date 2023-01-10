import { CATEGORIES_ACTION_TYPES } from './category.type';
import { createActionReducer } from '../../utils/reducer/reducer.util';



export const fetchCategoriesStart = () =>
  createActionReducer(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createActionReducer(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailure = (error) =>
  createActionReducer(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

