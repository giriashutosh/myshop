import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categories/category.reducer";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./carts/cart.reducer";
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'

import { compose, applyMiddleware, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
//import thunk from 'redux-thunk'

//import logger from 'redux-logger'

/////custom-middleware
const loggerMiddleWare: Middleware<{}, RootState> = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("paylaod: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const sagaMiddleware = createSagaMiddleware();
const middleWares = [
  process.env.NODE_ENV === "development" && loggerMiddleWare,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));
const rootreducer = {
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
};

export type RootState = ReturnType<typeof rootreducer>;

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['user']
// }

//const persistedReducer = persistReducer(persistConfig, rootreducer)

export const store = configureStore({
  reducer: rootreducer,
  middleware: middleWares,
  undefined,
  composedEnhancers,
});

sagaMiddleware.run(rootSaga);
//export const persistor = persistStore(store);
