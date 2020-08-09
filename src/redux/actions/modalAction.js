import { MODAL } from "../constants";

export const showMessage = (data) => ({
    type: MODAL.SHOW_MODAL,
    data: data
})


export const hideMessage = () => ({
    type: MODAL.HIDE_MODAL
})
