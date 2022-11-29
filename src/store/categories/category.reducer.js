//import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const CATEGORIES_INITIAL_STATE = {
    //catgoriesMap: {},
    categories: [],
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const {type, payload} = action;
    //console.log(action)
    switch (type) {
        case 'category/SET_CATEGORIES_MAP':
            //console.log({...state, catgoriesMap: payload})
            return {...state, categories: payload};
        default:
            //console.log("in default")
            return state
    }
}