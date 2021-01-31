import { ActionType } from './types';
/**
 * @param {string} message 新しく上書きするメッセージ
 */
export function setMessage(message) {
    return {
        type: ActionType.SET_MESSAGE,
        payload: { message }
    };
}

/**
 * 
 * @param {string} input 入力されている文字列
 */
export function setInput(input) {
    return {
        type: ActionType.SET_INPUT,
        payload: { input }
    };
}

/**
 * 
 * @param {string} content 送信する内容
 */
export function sendRequest(content) {

}

export function startSending() {
    return {
        type: ActionType.START_SENDING,
        payload: {}
    }
}

export function endSending() {
    return {
        type: ActionType.END_SENDING,
        payload: {}
    }
}