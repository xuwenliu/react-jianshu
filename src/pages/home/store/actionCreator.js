/*
 * @Description: home-相关action
 * @Author: xwl
 * @Date: 2019-05-26 11:09:10
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 10:28:12
 */
import types from './actionTypes';
import axios from 'axios';

const changeHomeData = (data) => ({
    type: types.CHANGE_HOME_DATA,
    ...data,
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

export default {
    getHomeData,
}