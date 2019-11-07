import styled from 'styled-components';
import homeImg from '../../static/img/home.png';
import homeActiveImg from '../../static/img/home-active.png';
import orderImg from '../../static/img/order.png';
import orderActiveImg from '../../static/img/order-active.png';
import accountImg from '../../static/img/my.png';
import accountActiveImg from '../../static/img/my-active.png';

export const BottomBarWrapper=styled.div`
    position:fixed;
    display:flex;
    bottom:0;
    left:0;
    width:100%;
    height:50px;
    z-index:999;
    background-color:#f6f6f6;
    .btn-bar{
        display:flex;
        justify-content:center;
        align-items:center;
        text-decoration:none;
        flex-direction:column;
        font-size:12px;
        flex:1;
        .bar-icon{
            margin-top:4px;
            margin-bottom:4px;
            width:25px;
            height:25px;
            background-color: blue;
            &.home{
                background:url(${homeImg});
                background-size:cover;
            }
            &.order{
                background:url(${orderImg});
                background-size:cover;
            }
            &.account{
                background:url(${accountImg});
                background-size:cover;
            }
        }
        .bar-key{
            width:25px;
            flex:1;
            display:flex;
            align-items:center;
            color:#acacac;
        }
        &.active{
            .bar-icon{
                &.home{
                
                background:url(${homeActiveImg});
                background-size:cover;
            }
                &.order{
                    background:url(${orderActiveImg});
                    background-size:cover;
                }
                &.account{
                    background:url(${accountActiveImg});
                    background-size:cover;
                }
            }
            .bar-key{
                color:#0c0c0c;
            }
        }
    }

`;