/*
 * @Description: Home页面
 * @Author: xwl
 * @Date: 2019-06-02 08:33:39
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 10:25:23
 */
import React from 'react';
import { connect } from 'react-redux';
import { HomeWrapper,HomeLeft,HomeRight } from './style';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';

import { actionCreator } from "./store/index";



class Home extends React.Component{
    componentDidMount() {
        this.props.getHomeData();
    }

    render() {
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
            </HomeWrapper>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    getHomeData() {
        dispatch(actionCreator.getHomeData());
    }
})
export default connect(null,mapDispatchToProps)(Home);