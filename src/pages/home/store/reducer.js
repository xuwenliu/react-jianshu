/*
 * @Description: home-reducer
 * @Author: xwl
 * @Date: 2019-05-26 10:34:06
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-03 14:12:26
 */
import { fromJS } from "immutable";

import types from "./actionTypes";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
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
        case types.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        default:
            return state;
    }
};
