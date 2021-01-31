import { ActionType, SceneName } from "./types";

const initialState = {
    loadingMark: false,
    name: '',
    password: '',
    sessionId: '',
    errorShown: false
}
export const LoginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionType.SET_LOADING_MARK:
            return {
                ...state,
                loadingMark: payload.enabled
            };
        case ActionType.SET_NAME_FIELD_VALUE:
            return {
                ...state,
                name: payload.value
            };
        case ActionType.SET_SESSION_ID_FIELD_VALUE:
            return {
                ...state,
                sessionId: payload.value
            };
        case ActionType.SET_PASSWORD_FIELD_VALUE:
            return {
                ...state,
                password: payload.value
            };
        case ActionType.SHOW_ERROR:
            return {
                ...state,
                errorShown: true
            };
        case ActionType.HIDE_ERROR:
            return {
                ...state,
                errorShown: false
            };
        default:
            return state;
    }
}