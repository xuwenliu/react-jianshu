/*
 * @Description: header的reducer
 * @Author: xwl
 * @Date: 2019-05-26 10:34:06
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 11:04:25
 */
import { fromJS } from "immutable";

import types from "./actionTypes";

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.SEARCH_FOCUS:
            return state.set("focused", true);
        case types.SEARCH_BLUR:
            return state.set("focused", false);
        case types.CHANGE_LIST:
            return state.merge({
                list: fromJS(action.data),
                totalPage: action.totalPage
            });
        case types.MOUSE_ENTER:
            return state.set("mouseIn", true);
        case types.MOUSE_LEAVE:
            return state.set("mouseIn", false);
        case types.CHANGE_PAGE:
            return state.set("page", action.page);

        default:
            return state;
    }
};
