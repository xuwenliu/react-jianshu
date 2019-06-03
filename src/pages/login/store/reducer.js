/*
 * @Description: login -reducer
 * @Author: xwl
 * @Date: 2019-05-26 10:34:06
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-03 13:47:12
 */
import { fromJS } from "immutable";

import types from "./actionTypes";

const defaultState = fromJS({
    login: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.CHANGE_LOGIN:
            return state.set("login", action.data);
        default:
            return state;
    }
};
