/*
 * @Description: 头部组件
 * @Author: xwl
 * @Date: 2019-05-26 09:02:11
 * @LastEditors: xwl
 * @LastEditTime: 2019-05-26 19:32:53
 */
import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { actionCreator } from "./store/index";

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./style";


class Header extends React.Component {
    
    getListArea = () => {
        const { focused, list } = this.props;
        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map((item,index) => 
                                <SearchInfoItem key={index}>{item}</SearchInfoItem>
                            )
                        }
                       
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    };

    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={this.props.handleFocus}
                                onBlur={this.props.handleBlur}
                                className={this.props.focused ? "focused" : ""}
                            />
                        </CSSTransition>
                        <i
                            className={
                                this.props.focused
                                    ? "focused iconfont"
                                    : "iconfont"
                            }
                        >
                            &#xe614;
                        </i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe615;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}
const mapStateToProps = state => ({
    focused: state.getIn(["headerReducer", "focused"]),
    list:state.getIn(["headerReducer", "list"]),
});

const mapDispatchToProps = dispatch => ({
    handleFocus() {
        dispatch(actionCreator.getList());
        dispatch(actionCreator.searchFocus());
    },
    handleBlur() {
        dispatch(actionCreator.searchBlur());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
