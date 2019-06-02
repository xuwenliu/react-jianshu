/*
 * @Description: home的reducer
 * @Author: xwl
 * @Date: 2019-05-26 10:34:06
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 11:24:43
 */
import { fromJS } from "immutable";

import types from "./actionTypes";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.CHANGE_HOME_DATA:
            return state.merge(
                {
                    topicList: fromJS(action.topicList),
                    articleList: fromJS(action.articleList),
                    recommendList: fromJS(action.recommendList),
                }
            );
        case types.ADD_ARTICLE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.data)),
                articlePage: action.page
            });
        
        default:
            return state;
    }
};
