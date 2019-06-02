/*
 * @Description: Home页面-Recommend组件
 * @Author: xwl
 * @Date: 2019-06-02 08:33:39
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 19:28:09
 */
import React from 'react';
import { connect } from "react-redux";

import { RecommendWrapper,RecommendItem } from '../style';


class Recommend extends React.PureComponent{
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map(item => 
                        <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                    )
                }
                
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = state => ({
    list: state.getIn(["homeReducer", "recommendList"])
});

export default connect(mapStateToProps,null)(Recommend);