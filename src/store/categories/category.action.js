import { createActionReducer } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const setCategoriesMap = (categoriesMap) => createActionReducer(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,categoriesMap) 