/*
 * @Description: Home页面-Topic组件
 * @Author: xwl
 * @Date: 2019-06-02 08:33:39
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 10:09:48
 */
import React from "react";
import { connect } from "react-redux";

import { TopicWrapper, TopicItem } from "../style";

class Topic extends React.Component {

    
    render() {
        const { list } = this.props;

        return (
            <TopicWrapper>
                {list.map(item => {
                    return (
                        <TopicItem key={item.get('id')}>
                            <img
                                className="topic-pic"
                                src={item.get('imgUrl')}
                                alt=""
                            />
                            {item.get('title')}
                        </TopicItem>
                    );
                })}
            </TopicWrapper>
        );
    }
}

const mapStateToProps = state => ({
    list: state.getIn(["homeReducer", "topicList"])
});

export default connect(
    mapStateToProps,
    null
)(Topic);
