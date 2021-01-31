import { ActionType } from './types';

/**
 * 
 * @param {string} sessionId 取得してきたセッションのID
 */
export function setSessionId(sessionId) {
    return {
        type: ActionType.SET_SESSION_ID,
        payload: { sessionId }
    };
}