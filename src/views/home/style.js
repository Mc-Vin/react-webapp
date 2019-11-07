import styled from 'styled-components';

function px2rem(pxVal){
    const px=parseFloat(pxVal);
    const rem=37.5;
    return `${px/rem}rem`;
}


export const BannerWrapper=styled.div`
    width:100%;
    height:0;
    padding-bottom:46.74%;
    margin-top:${px2rem('50px')};
    .swiper-container{
        position:relative;
        width:100%;
        .swiper-wrapper{
            width:100%;
            .swiper-slide{
                width:100%;
                .bannerImg{
                    width:100%;
                }
            }
        }
        .swiper-pagination{
            position:absolute;
            left:50%;
            bottom:0;
            margin-left:5px;
            width:50px;
            height:100px;
            transform:translateX(-50%) rotate(-90deg);
            .swiper-pagination-bullet{
                display:block;
                margin:5px 0;
                width:10px;
                height:10px;
                background-color: red;
            }
        }
    }
`;

export const SearchBarWrapper=styled.div`
    position:fixed;
    left:0;
    top:0;
    z-index:999;
    width:100%;
    height:${px2rem('50px')};
    padding:0 ${px2rem('10px')};
    display:flex;
    align-items:center;
    color:#fff;
    font-size:${px2rem('15px')};
    background-color: black;
    .location{
            float:left;
            min-width:${px2rem('30px')};
            height:100%;
            line-height:${px2rem('50px')};
            font-size:${px2rem('16px')};
            i,span{
                vertical-align:center;
            }
            span.city{
                margin:0 ${px2rem('4px')};
            }
        }
    .input-box{
            position:relative;
            width:${px2rem('241px')};
            margin-left:${px2rem('10px')};
            float:right;
            input{
                box-sizing:border-box;
                position:relative;
                width:100%;
                height:${px2rem('30px')};
                padding-left:${px2rem('30px')};
                border-radius:${px2rem('20px')};
                border:none;
                outline:none;
                &::placeholder{
                    font-size:${px2rem('14px')};
                    font-weight:300;
                }
                &:focus::placeholder{
                    color:transparent;
                }
            }
            .search-icon{
                position:absolute;
                font-size:${px2rem('16px')};
                left:${px2rem('4px')};
                top:${px2rem('6px')};
                color:black;
            }
    }
`;

export const IconListWrapper=styled.div`
    width:100%;
    height:0;
    padding-bottom:50%;
    background-color: #fff;
    .icon{
        width:25%;
        height:0;
        padding-bottom:25%;
        float:left;
        box-sizing:border-box;
        .icon-img{
            margin:0 auto;
            width:${px2rem('40px')};
            height:${px2rem('60px')};
            padding-top:${px2rem('20px')};
            .icon-img-content{
                width:100%;
            }
        }
        .icon-des{
            font-size:${px2rem('12px')};
            margin:${px2rem('10px')} auto;
            width:100%;
            text-align:center;
        }
    }
`;

export const MerchantContentWrapper=styled.div`
    width:100%;
    margin-top:${px2rem('8px')};
    margin-bottom:${px2rem('60px')};
    padding:0 ${px2rem('8px')};
    background-color: #fff;
    .title{
        width:100%;
        height:${px2rem('40px')};
        display:flex;
        justify-content:center;
        align-items:center;
        .line{
            width:${px2rem('40px')};
            height:1px;
            background-color: #949494;
        }
        .near-merchant{
            width:${px2rem('80px')};
            height:100%;
            line-height:${px2rem('40px')};
            font-size:${px2rem('16px')};
            text-align:center;
        }
    }
    .merchant-box{
        display:flex;
        flex-direction:column;
        width:100%; 
        .merchant-content{
            position:relative;
            width:100%;
            padding:${px2rem('25px')} 0;
            border-bottom:1px solid #f4f4f4;
            .merchant-img{
                float:left;
                width:${px2rem('76px')};
                height:${px2rem('57px')};
                img{
                    display:block;
                    width:100%;
                    height:100%;
                }
            }
            .merchant-des{
                width:${px2rem('270px')};
                height:${px2rem('57px')};
                float:right;
                .des-title{
                    font-size:${px2rem('16px')};
                }
                .num-rating{
                    font-size:${px2rem('11px')};
                    margin:${px2rem('10px')} 0;
                    .rating{
                        float:left;
                        margin-right:${px2rem('10px')}
                        .MuiSvgIcon-root{
                            width:10px;
                            height:10px;
                        }
                    }
                    .time-distance{
                        float:right;
                        .line{
                            margin:0 ${px2rem('5px')}
                        }
                    }
                }
                .price-time{
                    font-size:${px2rem('11px')};
                    .line{
                        margin:0 ${px2rem('5px')};
                    }
                }
            }
            .special{
                position:absolute;
                right:${px2rem('12px')};
                bottom:${px2rem('5px')};
                font-weight:500;
                width:${px2rem('70px')};
                height:${px2rem('25px')};
                background-color: #ffd161;
                border-radius:${px2rem('2px')};
                text-align:center;
                line-height:${px2rem('25px')};
                font-size:${px2rem('14px')};
            }
        }
    }
`;
