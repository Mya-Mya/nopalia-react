import { ActionType } from "./types";

const initialState = {
    sessionId: ''
}
export const SessionReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionType.SET_SESSION_ID:
            return {
                ...state,
                sessionId: payload.sessionId
            }
        default:
            return state;
    }
}