/*
 * @Description: home-相关action
 * @Author: xwl
 * @Date: 2019-05-26 11:09:10
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 19:18:42
 */
import types from './actionTypes';
import axios from 'axios';

const changeHomeData = (data) => ({
    type: types.CHANGE_HOME_DATA,
    ...data,
})

const addHomeList = (data,page) => ({
    type: types.ADD_ARTICLE_LIST,
    data,
    page
})

const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            if (res.data.success) {
                dispatch(changeHomeData(res.data.data));
            }
        }, (err) => {
                console.log(err);
        })
    }
}

const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+ page).then(res => {
            if (res.data.success) {
                dispatch(addHomeList(res.data.data, page + 1));
            }
        }, (err) => {
                console.log(err);
        })
    }
}

const toggleTopShow = (show) => ({
    type: types.TOGGLE_SCROLL_TOP,
    show
})

export default {
    getHomeData,
    getMoreList,
    toggleTopShow
}