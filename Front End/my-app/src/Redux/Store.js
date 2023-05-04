import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as cartReducer } from "./CartReducer/reducer";
const rootReducer = combineReducers({
  cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
