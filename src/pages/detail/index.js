/*
 * @Description: Detail页面
 * @Author: xwl
 * @Date: 2019-06-02 08:33:39
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-04 14:58:02
 */
import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import { DetailWrapper, Header, Content } from "./style";
import { actionCreator } from "./store";

class Detail extends React.PureComponent {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getDetail(id);
    }
    render() {
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: content }} />
            </DetailWrapper>
        );
    }
}
const mapStateToProps = state => ({
    title: state.getIn(["detailReducer", "title"]),
    content: state.getIn(["detailReducer", "content"])
});

const mapDispatchToProps = dispatch => ({
    getDetail(id) {
        dispatch(actionCreator.getDetail(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Detail));
