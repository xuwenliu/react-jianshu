/*
 * @Description: Login页面
 * @Author: xwl
 * @Date: 2019-06-02 08:33:39
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-03 14:09:40
 */
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreator } from "./store";

class Login extends React.PureComponent {
    render() {
        const { handleClickLogin, login } = this.props;
        //如果登录了就重定向到首页，否则显示登录页
        if (login) {
            return <Redirect to="/" />;
        } else {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input
                            innerRef={account => (this.account = account)}
                            className="account"
                            placeholder="账号"
                        />
                        <Input
                            innerRef={password => (this.password = password)}
                            className="password"
                            placeholder="密码"
                            type="password"
                        />
                        <Button
                            onClick={() =>
                                handleClickLogin(this.account, this.password)
                            }
                        >
                            登录
                        </Button>
                    </LoginBox>
                </LoginWrapper>
            );
        }
    }
}
const mapStateToProps = state => ({
    login: state.getIn(["loginReducer", "login"])
});

const mapDispatchToProps = dispatch => ({
    handleClickLogin(accountElement, passwordElement) {
        dispatch(
            actionCreator.userLogin(accountElement.value, passwordElement.value)
        );
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
