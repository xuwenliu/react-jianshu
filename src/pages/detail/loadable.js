/*
 * @Description: detail异步加载组件
 * @Author: xwl
 * @Date: 2019-06-04 14:51:33
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-04 14:54:19
 */
import React from "react";
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
    loader: () => import("./index"),
    loading() {
        return <div>正在加载</div>;
    }
});

export default () => <LoadableComponent />;
