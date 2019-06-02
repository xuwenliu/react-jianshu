/*
 * @Description:
 * @Author: xwl
 * @Date: 2019-05-26 08:25:07
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 19:59:28
 */

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/home";
import Detail from "./pages/detail";

import Header from "./common/header";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/detail" exact component={Detail} />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
