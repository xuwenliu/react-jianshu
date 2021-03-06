/*
 * @Description: header组件样式
 * @Author: xwl
 * @Date: 2019-05-26 09:07:39
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-03 13:09:21
 */
import styled from 'styled-components';
import logoPic from '../../static/img/logo.png';

export const HeaderWrapper = styled.div`
    position:relative;
    z-index:1;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.div`
    position:absolute;
    width:100px;
    height:56px;
    top:0;
    left:0;
    display:block;
    background:url(${logoPic});
    background-size:contain;
`
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
`
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        height:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    margin-top:9px;
    margin-left:20px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }

    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`

export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
`
export const SearchInfoTitle = styled.div`
    font-size:14px;
    margin-top:20px;
    margin-bottom:15px;
    color:#969696;
    line-height:20px;
`
export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    :hover{
        color: #2f2f2f;
    }
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-in;
        transform-origin:center center;
    }
`
export const SearchInfoList = styled.div`
    overflow:hidden;
`
export const SearchInfoItem = styled.a`
    font-size:12px;
    line-height:20px;
    padding:0 5px;
    color:#787878;
    border:1px solid #ddd;
    border-radius:3px;
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:15px;
    cursor:pointer;
    :hover{
        color: #333;
        border-color: #b4b4b4;
    }
`



export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
    heigth:56px;
`

export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    margin-right:20px;
    border:1px solid #ec6149;
    padding:0 20px;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`