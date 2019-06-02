/*
 * @Description: 创建action
 * @Author: xwl
 * @Date: 2019-05-26 11:09:10
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 11:03:51
 */
import types from './actionTypes';
import axios from 'axios';

const changeList = (data) => ({
    type: types.CHANGE_LIST,
    data,
    totalPage: Math.ceil(data.length / 10)
})



const searchFocus = () => ({
    type:types.SEARCH_FOCUS
})

const searchBlur = () => ({
    type:types.SEARCH_BLUR
})

const mouseEnter = () => ({
    type:types.MOUSE_ENTER
})
const mouseLeave = () => ({
    type:types.MOUSE_LEAVE
})
const changePage = (page) => ({
    type: types.CHANGE_PAGE,
    page
})

const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            if (res.data.success) {
                dispatch(changeList(res.data.data));
            }
        }, (err) => {
                console.log(err);
        })
    }
}

export default {
    searchFocus,
    searchBlur,
    getList,
    mouseEnter,
    mouseLeave,
    changePage
}