/*
 * @Description: home页面样式
 * @Author: xwl
 * @Date: 2019-06-02 08:37:02
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-02 19:10:04
 */
import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`
export const HomeLeft = styled.div`
    width:625px;
    padding-top:30px;
    margin-left:15px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`
export const HomeRight = styled.div`
    width:280px;
    float:right;
`

//Topic 组件样式
export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;

`
export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    font-size:14px;
    border:1px solid #dcdcdc;
    color:#000;
    border-radius:4px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    .topic-pic{
        width:32px;
        height:32px;
        display:block
        float:left;
        margin-right:10px;
    }
`


//List 组件样式
export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .pic{
        display:block;
        float:right;
        width:125px;
        height:100px;
        border-radius:10px;
    }
`
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`


//Recommend 组件样式
export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`

export const RecommendItem= styled.div`
    width:280px;
    height:50px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
    margin-bottom: 10px;
    border-radius: 10px;
`
//Writer 组件样式
export const WriterWrapper= styled.div`
    width:278px;
    border:1px solid #dcdcdc;
    height:300px;
    line-height:300px;
    text-align:center;
    border-radius: 10px;
`

//跟多
export const LoadMore= styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    margin:30px 0;
    cursor:pointer;

`

export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    cursor:pointer;
    border:1px solid #ccc;
    font-size:12px;
`

