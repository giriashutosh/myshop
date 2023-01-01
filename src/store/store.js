import { configureStore } from '@reduxjs/toolkit'
import { categoriesReducer } from './categories/category.reducer'
import { userReducer } from './user/user.reducer'
import { cartReducer } from './cart/cart.reducer'
//import { compose, applyMiddleware} from 'redux'

import logger from 'redux-logger'

/////custom-middleware
// const loggerMiddleWare = (store) => (next) => (action) => {
//     if(!action.type){
//         return next(action);
//     }

//     console.log('type: ', action.type);
//     console.log('paylaod: ', action.payload)
//     console.log('currentState: ', store.getState())

//     next(action)

//     console.log('next state: ', store.getState());
// }


const middleWares = [logger]
//const composedEnhancers = compose(applyMiddleware(...loggerMiddleWare))

const rootreducer = {
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
}

export const store = configureStore({
    reducer: rootreducer,
    middleware: middleWares,
    undefined,
    //composedEnhancers
    
})



