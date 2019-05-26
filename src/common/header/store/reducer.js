/*
 * @Description: 
 * @Author: xwl
 * @Date: 2019-05-26 10:34:06
 * @LastEditors: xwl
 * @LastEditTime: 2019-05-26 18:37:50
 */
import { fromJS } from 'immutable';

import types from './actionTypes';

const defaultState = fromJS({
    focused: false
});


export default (state = defaultState, action) => {
    if (action.type === types.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    if (action.type === types.SEARCH_BLUR) {
        return state.set('focused', false);
    }

    return state;
}