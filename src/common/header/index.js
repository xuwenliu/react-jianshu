/*
 * @Description: 头部组件
 * @Author: xwl
 * @Date: 2019-05-26 09:02:11
 * @LastEditors: xwl
 * @LastEditTime: 2019-05-26 20:39:57
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
        const {
            focused,
            mouseIn,
            list,
            page,
            totalPage,
            handleMouseEnter,
            handleMouseLeave,
            handleChangePage
        } = this.props;
        const jsList = list.toJS();
        let pageList = [];
        if (jsList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                if (jsList[i]) {
                    pageList.push(
                        <SearchInfoItem key={jsList[i]}>
                            {jsList[i]}
                        </SearchInfoItem>
                    );
                }
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() =>
                                handleChangePage(page, totalPage, this.spinIcon)
                            }
                        >
                            <i
                                ref={icon => (this.spinIcon = icon)}
                                className="iconfont spin"
                            >
                                &#xe851;
                            </i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>{pageList}</SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    };

    render() {
        const { handleFocus, handleBlur, list, focused } = this.props;

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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={() => handleFocus(list)}
                                onBlur={handleBlur}
                                className={focused ? "focused" : ""}
                            />
                        </CSSTransition>
                        <i
                            className={
                                focused
                                    ? "focused iconfont zoom"
                                    : "iconfont zoom"
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
    mouseIn: state.getIn(["headerReducer", "mouseIn"]),
    list: state.getIn(["headerReducer", "list"]),
    page: state.getIn(["headerReducer", "page"]),
    totalPage: state.getIn(["headerReducer", "totalPage"])
});

const mapDispatchToProps = dispatch => ({
    handleFocus(list) {
        list.size === 0 && dispatch(actionCreator.getList());
        dispatch(actionCreator.searchFocus());
    },
    handleBlur() {
        dispatch(actionCreator.searchBlur());
    },
    handleMouseEnter() {
        dispatch(actionCreator.mouseEnter());
    },
    handleMouseLeave() {
        dispatch(actionCreator.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
        let originAngle = spin.style.transform.replace(/[\D]/gi, ""); //360 空
        console.log(originAngle);
        if (originAngle) {
            originAngle *= 1;
        } else {
            originAngle = 0;
        }
        spin.style.transform = `rotate(${originAngle + 360}deg)`;
        if (page < totalPage) {
            page += 1;
        } else {
            page = 1;
        }
        dispatch(actionCreator.changePage(page));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
