/*
 * @Description: 头部组件
 * @Author: xwl
 * @Date: 2019-05-26 09:02:11
 * @LastEditors: xwl
 * @LastEditTime: 2019-05-26 18:48:22
 */
import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { actionCreator } from './store/index';

import { HeaderWrapper,Logo,Nav,NavItem,SearchWrapper,NavSearch,Addition,Button,SearchInfo} from './style';

class Header extends React.Component {
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
                            className={this.props.focused ? 'focused' : ''}
                        ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                            <SearchInfo></SearchInfo>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                    <i className="iconfont">&#xe615;</i>
                        写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    focused: state.getIn(['headerReducer','focused'])
})

const mapDispatchToProps = (dispatch) => ({
    handleFocus() {
        dispatch(actionCreator.searchFocus());
    },
    handleBlur() {
        dispatch(actionCreator.searchBlur());
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);


