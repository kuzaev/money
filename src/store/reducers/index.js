import { combineReducers } from "redux";

import menu from "./menu";
import categories from "./categories";
import expenses from "./expenses";
import modals from "./modals";

const rootReducer = combineReducers({
  menu,
  categories,
  expenses,
  modals,
});

export default rootReducer;
