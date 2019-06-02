/*
 * @Description: Home页面-list组件
 * @Author: xwl
 * @Date: 2019-06-02 08:33:39
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 10:35:23
 */
import React from "react";
import { connect } from "react-redux";

import { ListItem, ListInfo } from "../style";
class List extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <div>
                {list.map(item => {
                    return (
                        <ListItem key={item.get("id")}>
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
            </div>
        );
    }
}
const mapStateToProps = state => ({
    list: state.getIn(["homeReducer", "articleList"])
});

export default connect(
    mapStateToProps,
    null
)(List);
