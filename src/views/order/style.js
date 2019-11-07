import styled from 'styled-components';

function px2rem(pxVal){
    const px=parseFloat(pxVal);
    const rem=37.5;
    return `${px/rem}rem`;
}

export const OrderWrapper=styled.div`
    width:100%;
    background-color: #f4f4f4;
    margin-bottom:${px2rem('50px')};
    .title{
        width:100%;
        height:${px2rem('55px')};
        font-size:${px2rem('18px')};
        font-weight:500;
        text-align:center;
        line-height:${px2rem('55px')};
        margin-bottom:${px2rem('10px')};
        background-color: #fff;
    }
    .order-box{
        display:flex;
        flex-direction:column;
    }
`;

export const OrderItemWrapper=styled.div`
    width:100%;
    background-color: #fff;
    margin-bottom:${px2rem('10px')};
    padding:0 ${px2rem('10px')} ${px2rem('10px')} ;
    .title{
        display:flex;
        align-items:center;
        width:100%;
        height:${px2rem('50px')};
        .order-img{
            display:flex;
            align-items:center;
            justify-content:center;
            width:${px2rem('60px')};
            height:100%;
            img{
                display:block;
                border-radius:50%;
                width:${px2rem('35px')};
                height:${px2rem('35px')};
            }
        }
        .name-status{
            display:flex;
            align-items:center;
            border-bottom:1px solid #f4f4f4;
            .store-name{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size:${px2rem('16px')};
                font-weight:600;
                text-align:left;
                width:${px2rem('160px')};
            }
            .icon{
                display:flex;
                flex-direction:column;
                align-items:center;
                .material-icons{
                    font-size:28px;
                    color:black;
                }
            }
            .order-status{
                margin-left:${px2rem('20px')};
                color:#666666;
                font-size:${px2rem('14px')};
            }
        }
    }
    .content{
        display:flex;
        flex-direction:column;
        padding:${px2rem('15px')} 0 ${px2rem('15px')} ${px2rem('60px')};
        font-size: ${px2rem('16px')};
        color:#666666;
        border-bottom:1px solid #f4f4f4;
        .order-list{
            font-size: ${px2rem('14px')};
            padding:${px2rem('5px')} 0;
            .order-num{
                float:right;
            }
        }
        .order-price{
            padding:${px2rem('5px')} 0;
            .price{
                font-size:${px2rem('12px')};
                float:right;
                .total-price{
                    font-size:${px2rem('14px')};
                    font-weight:600;
                }
            }
        }
    }
    .comment{
        float:right;
        margin-top:${px2rem('10px')};
        margin-left:${px2rem('10px')};
        width:${px2rem('85px')};
        height:${px2rem('27px')};
        font-size:${px2rem('14px')};
        font-weight:400;
        text-align:center;
        line-height:${px2rem('27px')};
        background-color:#ffd161;
    }
`;