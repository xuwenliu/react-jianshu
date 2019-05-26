/*
 * @Description: 
 * @Author: xwl
 * @Date: 2019-05-26 10:32:57
 * @LastEditors: xwl
 * @LastEditTime: 2019-05-26 10:56:42
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));



export default store;
