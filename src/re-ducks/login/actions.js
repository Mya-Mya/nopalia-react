import { ActionType } from "./types";

export const LoginAction = {
    setNameFieldValue: (value) => ({
        type: ActionType.SET_NAME_FIELD_VALUE,
        payload: { value }
    }),
    setPasswordFieldValue: (value) => ({
        type: ActionType.SET_PASSWORD_FIELD_VALUE,
        payload: { value }
    }),
    setSessionIdFieldValue: (value) => ({
        type: ActionType.SET_SESSION_ID_FIELD_VALUE,
        payload: { value }
    }),
    showError: () => ({
        type: ActionType.SHOW_ERROR,
        payload: {}
    }),
    hideError: () => ({
        type: ActionType.HIDE_ERROR,
        payload: {}
    }),
    setLoadingMark: (enabled) => ({
        type: ActionType.SET_LOADING_MARK,
        payload: { enabled }
    })
}