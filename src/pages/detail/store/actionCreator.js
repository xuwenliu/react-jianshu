/*
 * @Description: detail-相关action
 * @Author: xwl
 * @Date: 2019-05-26 11:09:10
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-03 10:52:04
 */
import types from "./actionTypes";
import axios from "axios";

const changeDetailData = data => ({
    type: types.CHANGE_DETAIL_DATA,
    ...data
});

const getDetail = id => {
    return dispatch => {
        axios.get("/api/detail.json?id=" + id).then(
            res => {
                if (res.data.success) {
                    dispatch(changeDetailData(res.data.data));
                }
            },
            err => {
                console.log(err);
            }
        );
    };
};

export default {
    getDetail
};
