import { ActionType } from './types';

const initialState = {
    message: '',
    input: '',
    sending: false
}
export function TestReducer(state = initialState, action) {
    switch (action.type) {
        case ActionType.SET_MESSAGE:
            return {
                ...state,
                message: action.payload.message
            };
        case ActionType.SET_INPUT:
            return {
                ...state,
                input: action.payload.input
            }
        case ActionType.START_SENDING:
            return {
                ...state,
                sending: true
            }
        case ActionType.END_SENDING:
            return {
                ...state,
                sending: false
            }
        default:
            return state;
    }
}