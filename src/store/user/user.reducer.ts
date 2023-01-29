import { USER_ACTION_TYPES } from "./user.types";
import { AnyAction } from "@reduxjs/toolkit";
import {
  signInFailed,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
  signInSuccess,
} from "./user.action";
import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action:  AnyAction
)  => {
  if(signInSuccess.match(action)){
    return { ...state, currentUser: payload };
  }
  if(signOutSuccess.match(action)){
    return {...state, currentUser: null}
  }
  if(signInFailed.match(action) || signOutFailed.match(action) || signUpFailed.match(action)){
    return {...state, error: Error }
  }
  return state;
  // switch (type) {
  //   case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
  //     return { ...state, currentUser: payload };
  //   case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
  //     return{...state, currentUser: null}
  //   case USER_ACTION_TYPES.SIGN_IN_FAILED:
  //   case USER_ACTION_TYPES.SIGN_OUT_FAILED:
  //   case USER_ACTION_TYPES.SIGN_UP_FAILED:
  //     return {...state, error: payload }
  //   default:
  //     return state;
  // }
};
