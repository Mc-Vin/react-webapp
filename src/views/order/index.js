import React from 'react';
import OrderItem from './component/oderItem';
import ScrollView from '../../components/scrollView';
import { OrderWrapper } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Order extends React.Component {
    componentDidMount(){
        this.props.initOrderData();
    }

    loadCallback(page,isLoading){
        if(page<4){
            page++;
            isLoading=page>1&&page<4?true:false;
            this.props.handleScrollLoad(page,isLoading);
        }
    }

    render(){
        const { orderList,isLoading,page }=this.props; 
        return (
                <OrderWrapper>
                    <div className='title'>订单</div>
                    <div className='order-box'>
                    <ScrollView
                        loadCallback={this.loadCallback.bind(this,page,isLoading)} 
                        isLoading={isLoading}
                        page={page}
            >
                        {
                            orderList.map((item,index)=>(
                                <OrderItem orderContent={item} key={index}></OrderItem>
                            ))
                        }
                       </ScrollView>
                    </div>
                </OrderWrapper>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        orderList:state.order.orderList,
        isLoading:state.order.isLoading,
        page:state.order.loadingPage
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        initOrderData(){
            dispatch(actionCreators.initOrderDataAction());
        },
        handleScrollLoad(page,isLoading){
            dispatch(actionCreators.scrollLoadAction(page,isLoading));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Order);