/*
 * @Description: detail-reducer
 * @Author: xwl
 * @Date: 2019-05-26 10:34:06
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-03 14:12:56
 */
import { fromJS } from "immutable";

import types from "./actionTypes";

const defaultState = fromJS({
    title: "",
    content: ""
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.CHANGE_DETAIL_DATA:
            return state.merge({
                title: action.title,
                content: action.content
            });
        default:
            return state;
    }
};
