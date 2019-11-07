import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { OrderItemWrapper } from '../style';

class OrderItem extends React.Component {
    static propTypes={
        orderContent:PropTypes.object.isRequired
    }

    renderMealList(){
        const { orderContent }=this.props;
        return (
            orderContent.product_list.map(item=>(
                <div className='order-list'>
                    <span className='order-content'>{item.product_name}</span>
                    <span className='order-num'>x{item.product_count}</span>
                </div>
            ))
        );
    }

    renderButtonList(){
        const { orderContent }=this.props;
        return (
            orderContent.button_list.map(item=>(
                <div className='comment'>{item.title}</div>
            ))
        );
    }

    render(){
        const { orderContent }=this.props;
        return (
            <OrderItemWrapper>
                <div className='title'>
                    <div className='order-img'>
                        <img src={orderContent.poi_pic} />
                    </div>
                    <div className='name-status'>
                        <div className='store-name'>{orderContent.poi_name}</div>
                        <div className='icon'><Icon>chevron_right</Icon></div>
                        <div className='order-status'>{orderContent.status_description}</div>
                    </div>
                </div>
                <div className='content'>
                    {
                        this.renderMealList()
                    }
                    <div className='order-price'>
                        <span className='ignore'>...</span>
                        <span className='price'>总计{orderContent.product_list.length}个菜，实付<i className='total-price'>￥21.52</i></span>
                    </div>
                </div>
                {this.renderButtonList()}
            </OrderItemWrapper>
        );
    }
}

export default OrderItem;