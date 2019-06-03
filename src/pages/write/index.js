/*
 * @Description: Write页面
 * @Author: xwl
 * @Date: 2019-06-02 08:33:39
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-03 14:05:14
 */
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Write extends React.PureComponent {
    render() {
        const { login } = this.props;
        //如果登录了就去写文章页面，否则去登录页
        if (login) {
            return <div>写文章页面</div>;
        } else {
            return <Redirect to="/login" />;
        }
    }
}
const mapStateToProps = state => ({
    login: state.getIn(["loginReducer", "login"])
});

export default connect(mapStateToProps)(Write);
