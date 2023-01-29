import { CATEGORIES_ACTION_TYPES, Category } from "./category.type";
import {
  createActionReducer,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.util";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailure = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailure;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart =>
  createActionReducer(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((
  categoriesArray: Category[]
): FetchCategoriesSuccess =>
  createActionReducer(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  ));

export const fetchCategoriesFailure = withMatcher((error: Error): FetchCategoriesFailure =>
  createActionReducer(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));
