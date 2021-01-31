import { ActionType } from "./types";

export const SceneAction = {
    changeScene: (sceneName) => ({
        type: ActionType.CHANGE_SCENE,
        payload: { sceneName }
    }),
}