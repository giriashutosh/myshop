import { configureStore } from '@reduxjs/toolkit'

import { userReducer } from './user/user.reducer'
//import { compose, applyMiddleware} from 'redux'

import logger from 'redux-logger'

const middleWares = [logger]
//const composedEnhancers = compose(applyMiddleware(...middleWares))

const reducer = {
    user: userReducer,
}


export const store = configureStore({
    reducer,
    middleware: middleWares,
    undefined,
    
})