import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    changeTheNumber: changeTheNumber
});

export default allReducers;