/*
 * @Description: 创建action
 * @Author: xwl
 * @Date: 2019-05-26 11:09:10
 * @LastEditors: xwl
 * @LastEditTime: 2019-05-26 11:24:48
 */
import types from './actionTypes';

const searchFocus = () => ({
    type:types.SEARCH_FOCUS
})

const searchBlur = () => ({
    type:types.SEARCH_BLUR
})

export default {
    searchFocus,
    searchBlur
}