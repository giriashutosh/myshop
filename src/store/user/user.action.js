import { createActionReducer } from "../../utils/reducer/reducer.util"
import  USER_ACTION_TYPES  from "./user.types"

export const setCurrentUser = (user) => {
     //console.log(USER_ACTION_TYPES.SET_CURRENT_USER)
     createActionReducer(USER_ACTION_TYPES.SET_CURRENT_USER,user)
}