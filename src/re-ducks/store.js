import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";

import { TestReducer } from './test/reducers';
import { SceneReducer } from './scene/reducers';
import { LoginReducer } from './login/reducers';
import { SessionReducer } from './session/reducers';
export function configureStore() {
    const reducer = combineReducers({
        test: TestReducer,
        scene: SceneReducer,
        login: LoginReducer,
        session: SessionReducer
    })
    let store = createStore(reducer, applyMiddleware(thunk));
    console.log(store.getState());
    return store;
}