import { createActionReducer } from "../../utils/reducer/reducer.util"
import  { USER_ACTION_TYPES }  from "./user.types"

export const setCurrentUser = (user) => {
     //console.log(USER_ACTION_TYPES.SET_CURRENT_USER)
     createActionReducer(USER_ACTION_TYPES.SET_CURRENT_USER,user)
}

export const checkUserSession = () => createActionReducer(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => createActionReducer(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) => 
 createActionReducer(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password})

export const signInSuccess = (user) => 
//console.log(user)
createActionReducer(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)


export const signInFailed = (error) => 
 createActionReducer(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) => 
createActionReducer(USER_ACTION_TYPES.SIGN_UP_START, {email, password, displayName})

export const signUpSuccess = ({user, additionalDetails }) =>
createActionReducer(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails})

export const signUpFailed = (error) => 
createActionReducer(USER_ACTION_TYPES.SIGN_UP_FAILED, error)

export const signOutStart = () => 
createActionReducer(USER_ACTION_TYPES.SIGN_OUT_START)

export const signOutSuccess = () => 
createActionReducer(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)

export const signOutFailed = (error) => 
createActionReducer(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)


