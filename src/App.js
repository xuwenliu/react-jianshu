/*
 * @Description:
 * @Author: xwl
 * @Date: 2019-05-26 08:25:07
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-03 14:05:57
 */

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";
import Write from "./pages/write";

import Header from "./common/header";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/detail/:id" exact component={Detail} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/write" exact component={Write} />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
