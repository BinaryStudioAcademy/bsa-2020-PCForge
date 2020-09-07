import { UserLoginAttributes } from "common/models/user.model"
import { AUTH_LOGIN_REQUEST, AuthActionTypes } from "containers/Auth/actionTypes"

export const loginRequest = (payload: UserLoginAttributes): AuthActionTypes => ({
    type: AUTH_LOGIN_REQUEST,
    payload,
});
