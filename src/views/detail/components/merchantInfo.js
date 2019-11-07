import React, { Fragment } from 'react';

class MerchantInfo extends React.Component{
    render(){
        return (
            <div className='detail-merchant-content'>
                <div className='address box'>
                    <span className='icon'></span>
                    <span>15118120697</span>
                </div>
                <div className='coupon box'>
                    <span className='icon'></span>
                    <span>商家地址：深圳市南山区南新路2084号(田夏商业大厦)(田夏商业大厦1楼)</span>
                </div>
                <div className='review box'>
                    <span className='icon'></span>
                    <span>配送时间：10:00-23:20</span>
                </div>
                <div className='qusetion box'>
                    <span className='icon'></span>
                    <span>配送服务：美团专送提供高质量配送服务</span>
                </div>
                <div className='service box'>
                    <span>该商家支持在线支付</span>
                </div>
            </div>
        )
    }
}
export default MerchantInfo;