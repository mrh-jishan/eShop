import { GOOGLE_AUTH, LOCATION, LOGIN, REGISTER } from "../constants";

export const gAuthInit = () => ({
    type: GOOGLE_AUTH.AUTH_INIT
})

export const initLogin = (user) => ({
    type: LOGIN.INIT_AUTH,
    user: user
})

export const register = (body)=>({
    type: REGISTER.INIT_REGISTER,
    body: body
})

// todo 
export const gAuthSuccess = (gAuth) => ({
    type: GOOGLE_AUTH.AUTH_SUCCESS,
    gAuth: gAuth
})

export const loginSuccess = (auth) => ({
    type: LOGIN.AUTH_SUCCESS,
    auth: auth
})

export const gAuthError = (error) => ({
    type: GOOGLE_AUTH.AUTH_ERROR,
    error: error
})

export const authError = (error) => ({
    type: LOGIN.AUTH_ERROR,
    error: error.data
})

export const registerError = (error) => ({
    type: REGISTER.REGISTER_ERROR,
    error: error.data
})

export const logout = () => ({
    type: LOGIN.LOGOUT
})

export const gLogout = () => ({
    type: GOOGLE_AUTH.LOGOUT
})

export const setLocation = (location) => ({
    type: LOCATION.INIT_LOCATION,
    location: location
})
