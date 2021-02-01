import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";

import { TestReducer } from './test/reducers';
import { SceneReducer } from './scene/reducers';
import { LoginReducer } from './login/reducers';
import { SessionReducer } from './session/reducers';
import { ProfileReducer } from './profile/profileSlice';
const reducer = combineReducers({
    test: TestReducer,
    scene: SceneReducer,
    login: LoginReducer,
    session: SessionReducer,
    profile: ProfileReducer
})
export const store = createStore(reducer, applyMiddleware(thunk));
