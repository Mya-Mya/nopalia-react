export function getMessage(state) {
    return state.test.message;
}
export function getInputValue(state) {
    return state.test.input;
}
export function isSending(state) {
    return state.test.sending;
}