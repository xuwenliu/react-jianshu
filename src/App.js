/*
 * @Description:
 * @Author: xwl
 * @Date: 2019-05-26 08:25:07
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 10:59:29
 */

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/home';
import Detail from './pages/detail';

import Header from "./common/header";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <BrowserRouter>
                    <div>
                        <Route
                            path="/"
                            exact
                            component={Home}
                        />
                        <Route
                            path="/detail"
                            exact
                            component={Detail}
                        />
                    </div>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
