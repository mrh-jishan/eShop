import { LOGIN, ERROR, MODAL } from '../constants';

const initState = {
    visible: false,
    message: '',
    primaryButton: true,
    secondaryButton: false
}

const modalReducer = (state = initState, action) => {
    switch (action.type) {

        case MODAL.SHOW_MODAL:
            return {
                ...initState,
                visible: true,
                ...action.data
            }

            case MODAL.HIDE_MODAL:
                return {
                    ...initState,
                    visible: false,
                }
    
        default:
            return state;
    }
};

export default modalReducer;
