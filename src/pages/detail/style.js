/*
 * @Description: detail页面样式
 * @Author: xwl
 * @Date: 2019-06-02 08:37:02
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-03 10:13:22
 */
import styled from 'styled-components';

export const DetailWrapper = styled.div`
    width:620px;
    margin:0 auto;
    overflow:hidden;
    padding-bottom:100px;
`
export const Header = styled.div`
    margin:50px 0 20px 0;
    line-height:44px;
    font-size:34px;
    color:#333;
    font-weight:bold;
`
export const Content = styled.div`
    color:#2f2f2f;
    img{
        max-width:100%;
    }
    p{
        margin:25px 0;
        color:#2f2f2f;
        font-size:16px;
        line-heigth:30px;
    }
`