import React from 'react';
import { AccountWrapper } from './style';

class Account extends React.Component {
    render(){
        return (
            <AccountWrapper>
                <div className='head'></div>
                <div className='address box'>
                    <span className='icon'></span>
                    <span>收货地址管理</span>
                </div>
                <div className='coupon box'>
                    <span className='icon'></span>
                    <span>商家代金券</span>
                </div>
                <div className='review box'>
                    <span className='icon'></span>
                    <span>意见反馈</span>
                </div>
                <div className='qusetion box'>
                    <span className='icon'></span>
                    <span>常见问题</span>
                </div>
                <div className='service box'>
                    <span>客服电话：101-097-000</span>
                </div>
                <div className='time box'>
                    <span>服务时间:9:00-10:00</span>
                </div>
            </AccountWrapper>
        )
    }
}

export default Account;