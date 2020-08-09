import { AUTH_TYPE, GOOGLE_AUTH, LOCATION, LOGIN, REGISTER } from '../constants';

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

        case LOGIN.INIT_AUTH:
            return {
                ...state,
                body: action.user,
            }

            case REGISTER.INIT_REGISTER:
                return {
                    ...state,
                    body: action.body,
                }

        case LOCATION.INIT_LOCATION:
            return {
                ...state,
                location: action.location
            }

        case LOGIN.AUTH_SUCCESS:
            return {
                ...initState,
                isLoading: false,
                isLoggedIn: true,
                user: action.auth.user,
                token: action.auth.token,
                authType: AUTH_TYPE.BASIC
            }

        case GOOGLE_AUTH.AUTH_SUCCESS:
            return {
                ...initState,
                isLoading: false,
                isLoggedIn: true,
                user: action.gAuth.user,
                token: action.gAuth.token,
                authType: AUTH_TYPE.GOOGLE
            }

        case LOGIN.AUTH_ERROR:
            return {
                ...state,
                error: action.error,
            }

        case GOOGLE_AUTH.AUTH_ERROR:
            return {
                ...state,
                error: action.error
            };

            case REGISTER.REGISTER_ERROR:
                return {
                    ...state,
                    error: action.error
                };
    

        case GOOGLE_AUTH.LOGOUT:
            return {
                ...initState,
                location: state.location
            }

        case LOGIN.LOGOUT:
            return {
                ...initState,
                location: state.location
            }


        default:
            return state;
    }
};

export default authReducer;
