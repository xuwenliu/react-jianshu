/*
 * @Description: home的reducer
 * @Author: xwl
 * @Date: 2019-05-26 10:34:06
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 10:41:33
 */
import { fromJS } from "immutable";

import types from "./actionTypes";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
    
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.CHANGE_HOME_DATA:
            console.log(action)
            return state.merge(
                {
                    topicList: fromJS(action.topicList),
                    articleList: fromJS(action.articleList),
                    recommendList: fromJS(action.recommendList),
                }
            );

        default:
            return state;
    }
};
