/*
 * @Description: Home页面
 * @Author: xwl
 * @Date: 2019-06-02 08:33:39
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 19:27:45
 */
import React from 'react';
import { connect } from 'react-redux';
import { HomeWrapper,HomeLeft,HomeRight,BackTop } from './style';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';

import { actionCreator } from "./store/index";



class Home extends React.PureComponent{
    componentDidMount() {
        this.props.getHomeData();
        this.bindEvents();
    }

    handleScrollTop(){
        window.scroll(0, 0);
    }

    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    render() {
        const { showScroll } = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    showScroll ? <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop> : null
                }
                
            </HomeWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    showScroll:state.getIn(['homeReducer','showScroll'])
})
const mapDispatchToProps = (dispatch) => ({
    getHomeData() {
        dispatch(actionCreator.getHomeData());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreator.toggleTopShow(true));
        } else {
            dispatch(actionCreator.toggleTopShow(false));
            
            
        }
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);