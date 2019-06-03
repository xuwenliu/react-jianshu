/*
 * @Description: login-相关action
 * @Author: xwl
 * @Date: 2019-05-26 11:09:10
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-03 13:57:02
 */
import types from "./actionTypes";
import axios from "axios";

const changeLogin = data => ({
    type: types.CHANGE_LOGIN,
    data
});

const userLogin = (account, password) => {
    return dispatch => {
        axios
            .get(`/api/login.json?account=${account}&password=${password}`)
            .then(
                res => {
                    if (res.data.success) {
                        dispatch(changeLogin(true));
                    }
                },
                err => {
                    console.log(err);
                }
            );
    };
};

const userLogout = () => {
    return dispatch => {
        axios.get(`/api/login.json`).then(
            res => {
                if (res.data.success) {
                    dispatch(changeLogin(false));
                }
            },
            err => {
                console.log(err);
            }
        );
    };
};

export default {
    userLogin,
    userLogout
};
