import { useState } from "react"
import { NopaliaAPI } from "../../gateway/NopaliaAPI"
import { getSessionId } from "../session/selectors"
import { setMeAge, setMeName, setMeComment } from "./profileSlice"
import { SceneOperation } from '../scene/operations'
import { SceneName } from "../scene/types"
import { useSelector } from "react-redux"
import { ProfileSelector } from "./selectors"
import { store } from "../store"

export const ProfileOperation = {
    /**
     * セッションIDを基に自分のプロフィールを取得する。
     */
    fetchMeProfile: () => {
        const sessionId = getSessionId(store.getState());
        return dispatch => {//thunk
            NopaliaAPI.type('account.fromsession')//名前の取得
                .payload({ sessionId: getSessionId(store.getState()) })
                .onResponse(data => {
                    if (data.status = 'SUCCESSED') {
                        const name = data.name;
                        dispatch(setMeName(name));
                        NopaliaAPI.type('profile.getprofile')//その他のプロフィールの取得
                            .payload({ accountName: name })
                            .onResponse(data => {
                                const { profile } = data;
                                dispatch(setMeAge(profile.age));
                                dispatch(setMeComment(profile.comment));
                            })
                            .send();
                    } else {
                        dispatch(SceneOperation.changeScene(SceneName.LOGIN));
                    }
                })
                .send();
        }
    },
    /**
     * セッションを基に自分のプロフィールを更新する。
     * @param {Number} age
     * @param {String} comment
     */
    setMeProfile: (age, comment) => {
        const sessionId = getSessionId(store.getState());
        return dispatch => {
            NopaliaAPI.type('profile.setmyprofile')
                .payload({ sessionId, age, comment })
                .onResponse(data => {
                    const { accountName, status, loggined } = data;
                    if (!loggined) {
                        dispatch(SceneOperation.changeScene(SceneName.LOGIN));
                    }
                })
                .onError()
                .send();
        }
    },
}