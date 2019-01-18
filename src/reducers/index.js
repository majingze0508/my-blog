import { combineReducers } from "redux";
import EmailReducer from "./reducer_email";
import WheatherReducer from "./reducer_wheather";

const rootReducer = combineReducers({
  email: EmailReducer,
  wheather: WheatherReducer
});

export default rootReducer;
