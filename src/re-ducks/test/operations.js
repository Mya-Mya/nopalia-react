import axios from 'axios';
import { callNopaliaAPI, NopaliaAPI } from '../../gateway/NopaliaAPI';
import * as Action from './actions';
/**
 * @param {string} message 新しく上書きするメッセージ
 */
export function setMessage(message) {
    return Action.setMessage(message)
}

/**
 * 
 * @param {string} input 入力されている文字列
 */
export function setInput(input) {
    return Action.setInput(input);
}

/**
 * 
 * @param {string} content 送信する内容
 */
export function sendRequest(content) {
    console.log('sendRequest content=' + content);
    return dispatch => {//thunk
        dispatch(Action.startSending())

        NopaliaAPI.type('nopalia.record')
            .payload({ message: content })
            .onResponse((data) => {
                dispatch(setMessage('できた:' + JSON.stringify(data)));
            })
            .onError(() => {
                dispatch(setMessage('できなかった'));
            })
            .finally(() => {
                console.log('finally');
                dispatch(Action.endSending());
            })
            .send();
    }
}
