import { combineReducers } from "redux";
import ProductInformation from "./product";
import CurrentUser from "./user";

const rootReducer  = combineReducers({
    CurrentUser,
    ProductInformation
})

export default rootReducer;