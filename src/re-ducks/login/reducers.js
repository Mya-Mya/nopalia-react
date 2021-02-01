import { ActionType, SceneName } from "./types";

const initialState = {
    loadingMark: false,
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