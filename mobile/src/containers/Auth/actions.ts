import { UserLoginAttributes } from "src/common/models/user"
import { AUTH_LOGIN_REQUEST, AuthActionTypes } from "./actionTypes"

export const loginRequest = (payload: UserLoginAttributes): AuthActionTypes => ({
    type: AUTH_LOGIN_REQUEST,
    payload,
});
