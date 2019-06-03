/*
 * @Description: login页面样式
 * @Author: xwl
 * @Date: 2019-06-02 08:37:02
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-03 13:29:19
 */
import styled from "styled-components";

export const LoginWrapper = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background: #eee;
`;
export const LoginBox = styled.div`
    width: 400px;
    margin: 180px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    vertical-align: middle;
    display: block;
`;
export const Input = styled.input`
    width: 300px;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0, 0%, 71%, 0.1);
    vertical-align: middle;
    outline: none;
    font-size: 14px;
    margin: 0 auto;
    display: block;
    &.account {
        border-bottom: none;
        border-radius: 4px 4px 0 0;
    }
`;
export const Button = styled.div`
    width: 300px;
    padding: 13px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
    text-align:center;
    margin: 20px auto 0;
    display: block;
    background:#3194d0;
    &:hover{
        background: #187cb7;
    }
`;
