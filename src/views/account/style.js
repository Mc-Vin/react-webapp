import styled from 'styled-components';
import HeadImg from '../../static/img/account-head.png';

function px2rem(pxVal){
    const px=parseFloat(pxVal);
    const rem=37.5;
    return `${px/rem}rem`;
}

export const AccountWrapper=styled.div`
    width:100%;
    padding-bottom:166%;
    height:0;
    background-color:#f4f4f4;
    font-size:${px2rem('16px')};
    .head{
        width:100%;
        height:0;
        padding-bottom:43%;
        background:url(${HeadImg});
        background-size:cover;
    }
    .box{
            width:100%;
            height:${px2rem('40px')};
            line-height:${px2rem('40px')};
            padding-left:${px2rem('20px')};
            background-color:#fff;
            &.address,&.review {
                border-bottom:1px solid #eee;
            }
            &.review{
                margin-top:${px2rem('20px')};
            }
            &.service{
                text-align:center;
                color:orange;
                margin-top:${px2rem('20px')};
                border-bottom:1px solid #eee;
            }
            &.time{
                text-align:center;
            }
        }

`;