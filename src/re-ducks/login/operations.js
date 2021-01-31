import { SceneAction } from "../scene/actions";
import { SceneName } from "../scene/types";
import { LoginAction } from "./actions";
import { NopaliaAPI } from '../../gateway/NopaliaAPI';
import { setSessionId } from "../session/action";
export const LoginOperation = {
    /**
     * 入力中の名前の文字列を指定する 
     * @param {string} value
    */
    onNameFieldChanged: (value) => LoginAction.setNameFieldValue(value),
    /**
     * 入力中のパスワードの文字列を指定する
     * @param {string} value
     */
    onPasswordFieldChanged: (value) => LoginAction.setPasswordFieldValue(value),
    /**
     * 入力中のセッションIDの文字列を指定する
     * @param {string} value 
     */
    onSessionIdFieldChanged: (value) => LoginAction.setSessionIdFieldValue(value),
    /**
     * ログインボタンを押した
     * @param {string} accountName
     * @param {string} accountPassword
     */
    onLoginButtonPushed: (accountName, accountPassword) => {
        return dispatch => {//thunk
            dispatch(LoginAction.setLoadingMark(true));
            NopaliaAPI.type('account.login')
                .payload({ name: accountName, password: accountPassword })
                .onResponse(data => {
                    const status = data.status;
                    switch (status) {
                        case 'SUCCESSED':
                            const sessionId = data.sessionId;
                            dispatch(setSessionId(sessionId));
                            console.log(sessionId);
                            dispatch(SceneAction.changeScene(SceneName.MY_PROFILE));
                            break;
                        case 'FAILED':
                            dispatch(LoginAction.showError());
                            break;
                        default:
                            break;
                    }
                })
                .onError(() => dispatch(LoginAction.showError()))
                .finally(() => dispatch(LoginAction.setLoadingMark(false)))
                .send();
        }
    },
    /**
     * サインアップボタンを押した
     */
    onSignupButtonPushed: () => SceneAction.changeScene(SceneName.CREATE_ACCOUNT),
    /**
     * エラー表示を隠す
     */
    hideError: LoginAction.hideError,
    /**
     * セッションのIDを使ってログイン
     * @param {string} sessionId
     */
    loginBySessionId: (sessionId) => {
        return dispatch => {//thunk
            dispatch(setSessionId(sessionId));
            dispatch(SceneAction.changeScene(SceneName.MY_PROFILE));
        }
    }
}