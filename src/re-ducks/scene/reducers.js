import { ActionType, SceneName } from "./types";

const initialState = {
    sceneName: SceneName.LOGIN
}
export const SceneReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionType.CHANGE_SCENE:
            return {
                ...state,
                sceneName: payload.sceneName
            }
        default:
            return state;
    }
}