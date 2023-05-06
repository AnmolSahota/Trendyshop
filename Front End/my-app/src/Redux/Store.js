import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as cartReducer } from "./CartReducer/reducer";
import { reducer as productReducer } from "./productReducer/reducer";
const rootReducer = combineReducers({
  cartReducer,
  productReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
