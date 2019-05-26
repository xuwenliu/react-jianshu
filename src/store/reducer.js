/*
 * @Description: 所有的reducer
 * @Author: xwl
 * @Date: 2019-05-26 10:34:06
 * @LastEditors: xwl
 * @LastEditTime: 2019-05-26 18:43:38
 */
// combineReducers 从redux-immutable里面导入就会让reducer变成imutable对象
import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";

const reducer = combineReducers({
    headerReducer
});
export default reducer;
