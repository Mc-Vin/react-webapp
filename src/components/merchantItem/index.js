import React from 'react';
import './style.scss';
import { withRouter } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

class MerchantItem extends React.Component{
    handleMerchantClick=(id)=>{
        this.props.history.push({
            pathname:`/detail/${id}/order`
        })
    }

    render(){
        return (
            <div className='merchant-box' onClick={()=>this.handleMerchantClick(this.props.item.id,this.props.item.name)}>
                <div className='merchant-content'>
                    <div className='merchant-img'>
                        <img src={this.props.item.pic_url} />
                    </div>
                    <div className='merchant-des'>
                        <p className='des-title'>{this.props.item.name}</p>
                        <div className='num-rating'>
                            <div className='rating'>
                                <Rating  className='rating-star' value={this.props.item.wm_poi_score} precision={0.1} size="small" readOnly />
                            </div>
                            <span className='num'>月售{this.props.item.month_sale_num}+</span>
                            <div className='time-distance'>
                                <span className='time'>{this.props.item.mt_delivery_time}</span>
                                <span className='line'>|</span>
                                <span className='distance'>{this.props.item.distance}</span>
                            </div>
                        </div>
                        <div className='price-time'>
                            <span className='price'>{this.props.item.min_price_tip}</span>
                            <span className='line'>|</span>
                            <span className='time'>{this.props.item.mt_delivery_time}</span>
                        </div>
                    </div>
                    <div className='special'>美团专卖</div>
                </div>
            </div>
        )
    }
}

export default withRouter(MerchantItem);