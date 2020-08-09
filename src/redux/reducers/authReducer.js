import { AUTH, AUTH_TYPE } from '../constants';

const initState = {
    error: null,
    isLoggedIn: false,
    user: {},
    token: null,
    body: null,
    authType: null,
    location: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {

        case AUTH.INIT_AUTH:
            return {
                ...state,
                body: action.user,
            }

        case AUTH.AUTH_SUCCESS:
            return {
                ...initState,
                isLoading: false,
                isLoggedIn: true,
                // user: action.auth.user,
                // token: action.auth.token,
                authType: AUTH_TYPE.BASIC
            }

        case AUTH.AUTH_ERROR:
            return {
                ...state,
                error: action.error,
            }

        case AUTH.LOGOUT:
            return initState;


        default:
            return state;
    }
};

export default authReducer;
