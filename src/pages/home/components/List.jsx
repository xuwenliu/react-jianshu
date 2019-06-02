/*
 * @Description: Home页面-list组件
 * @Author: xwl
 * @Date: 2019-06-02 08:33:39
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 11:26:09
 */
import React from "react";
import { connect } from "react-redux";

import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreator } from "../store/index";

class List extends React.Component {
    render() {
        const { list,page,getMoreList } = this.props;
        return (
            <div>
                {list.map((item,index) => {
                    return (
                        <ListItem key={index}>
                            <img
                                className="pic"
                                src={item.get("imgUrl")}
                                alt=""
                            />
                            <ListInfo>
                                <h3 className="title">{item.get("title")}</h3>
                                <p className="desc">{item.get("desc")}</p>
                            </ListInfo>
                        </ListItem>
                    );
                })}
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    list: state.getIn(["homeReducer", "articleList"]),
    page: state.getIn(["homeReducer", "articlePage"]),
});
const mapDispatchToProps = dispatch => ({
    getMoreList(page) {
        dispatch(actionCreator.getMoreList(page));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
