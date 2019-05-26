/*
 * @Description:
 * @Author: xwl
 * @Date: 2019-05-26 08:25:07
 * @LastEditors: xwl
 * @LastEditTime: 2019-05-26 10:36:59
 */

import React from "react";
import { Provider } from 'react-redux';

import Header from "./common/header";
import store from './store';

function App() {
    return (
        <Provider store={store}>
             <Header />
        </Provider>
    )
       
}

export default App;
