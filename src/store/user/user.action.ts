import {
  createActionReducer,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.util";
import { USER_ACTION_TYPES } from "./user.types";
import { AdditionalInformation, UserData } from "../../utils/firebase/firebase.utils";

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: UserData; additionalDetails: AdditionalInformation }
>;

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

export const checkUserSession = withMatcher(
  (): CheckUserSession => createActionReducer(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createActionReducer(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createActionReducer(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserData): SignInSuccess =>
    createActionReducer(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createActionReducer(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createActionReducer(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: UserData, additionalDetails: AdditionalInformation): SignUpSuccess =>
    createActionReducer(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createActionReducer(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => createActionReducer(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createActionReducer(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createActionReducer(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);


// export const checkUserSession = withMatcher(
//   (): CheckUserSession =>
//     createActionReducer(USER_ACTION_TYPES.CHECK_USER_SESSION)
// );

// export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser => 
//   //console.log(USER_ACTION_TYPES.SET_CURRENT_USER)
//   createActionReducer(USER_ACTION_TYPES.SET_CURRENT_USER, user)
// );

// export const googleSignInStart = withMatcher((): GoogleSignInStart =>
//   createActionReducer(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

// export const emailSignInStart = withMatcher((email: string, password: string): EmailSignInStart =>
//   createActionReducer(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
//     email,
//     password,
//   }));

// export const signInSuccess = withMatcher((user: UserData): SignInSuccess =>
//   //console.log(user)
//   createActionReducer(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

// export const signInFailed = withMatcher((error: Error): SignInFailed =>
//   createActionReducer(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

// export const signUpStart = withMatcher((email: string, password: string, displayName: string): SignUpStart =>
//   createActionReducer(USER_ACTION_TYPES.SIGN_UP_START, {
//     email,
//     password,
//     displayName,
//   }));

// export const signUpSuccess = withMatcher(( user: UserData, additionalDetails: AdditionalInformation ): SignUpSuccess =>
//   createActionReducer(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
//     user,
//     additionalDetails,
//   }));

// export const signUpFailed = withMatcher((error: Error): SignUpFailed =>
//   createActionReducer(USER_ACTION_TYPES.SIGN_UP_FAILED, error));

// export const signOutStart = withMatcher((): SignOutStart =>
//   createActionReducer(USER_ACTION_TYPES.SIGN_OUT_START));

// export const signOutSuccess = withMatcher((): SignOutSuccess =>
//   createActionReducer(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

// export const signOutFailed = withMatcher((error: Error): SignOutFailed =>
//   createActionReducer(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));
