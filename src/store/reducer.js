/*
 * @Description: 所有的reducer
 * @Author: xwl
 * @Date: 2019-05-26 10:34:06
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-03 13:31:08
 */
// combineReducers 从redux-immutable里面导入就会让reducer变成imutable对象
import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/detail/store";
import { reducer as loginReducer } from "../pages/login/store";

const reducer = combineReducers({
    headerReducer,
    homeReducer,
    detailReducer,
    loginReducer
});
export default reducer;
