import { AUTH, AUTH_TYPE, MODAL } from "../constants";

export const authInit = () => ({
    type: AUTH.INIT_AUTH
})

export const authSuccess = (auth) => ({
    type: AUTH.AUTH_SUCCESS,
    auth: auth
})

export const authError = (error) => ({
    type: AUTH.AUTH_ERROR,
    error: error
})

export const logout = () => ({
    type: LOGIN.LOGOUT
})
