import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as cartReducer } from "./CartReducer/reducer";
import { reducer as productReducer } from "./productReducer/reducer";
import { reducer as singleReducer } from "./SingleProduct/reducer";
import { reducer as AdminAuth } from "./AdminAuth/reducer";
import { reducer as AdminAlldataReducer } from "./AdminAlldataReducer/reducer";
import { reducer as CRUDReducer } from "./AdminCRUD/reducer";
import { reducer as AdminUserData } from "./AdminUserReducer/reducer";
import { reducer as loginReducer } from "./LoginReducer/reducer";
const rootReducer = combineReducers({
  cartReducer,
  singleReducer,
  AdminAuth,
  AdminAlldataReducer,
  AdminUserData,
  CRUDReducer,
  loginReducer,
  productReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
