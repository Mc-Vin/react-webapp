import React,{ Fragment } from 'react';
import './style.scss';
import Cart from './cart';
import OrderItem from '../../../components/orderItem';
import { connect } from 'react-redux';
import { actionCreators, actionTypes } from '../store';

class DetailOrder extends React.Component{
    handleAddClick=(item)=>{
        if(!item.total_num){
            item.total_num=1;
        }
        const { cartList }=this.props;
        const _cartList=JSON.parse(JSON.stringify(cartList));
        const foundCartItem= _cartList.find(cartItem=>(item.id===cartItem.id));
        if(foundCartItem){
            foundCartItem.total_num++;
        }else{
            _cartList.push(item);
        }
        this.props.changeCartList(_cartList);
    }

    handleMinusClick=(item)=>{
        const { cartList }=this.props;
        const _cartList=JSON.parse(JSON.stringify(cartList));
        const foundCartItem= _cartList.find(cartItem=>(item.id===cartItem.id));
        if(foundCartItem&&foundCartItem.total_num>0){
            foundCartItem.total_num--;
        }
        this.props.changeCartList(_cartList);
    }

    handleMenuClick=(name)=>{
        this.props.changeMenuName(name);
    }

    renderMenu(){
        const { foodList }=this.props;
        return (
            <Fragment>
                {
                    foodList.map(item=>(
                        <Fragment>
                            <div 
                                className='menu-item' 
                                onClick={()=>this.handleMenuClick(item.name)}
                                key={item.tag}
                            >
                                {
                                    item.icon?(
                                        <div className='menu-icon'>
                                            <img src={item.icon} className='icon-img' />
                                        </div>
                                    ):null
                                }
                                <div className='menu-name'>{item.name}</div>
                            </div>
                        </Fragment>
                    ))
                }
            </Fragment>
        )
    }
    
    renderContent(){
        const { foodList, activeName }= this.props;
        if(foodList.length){
            const _name = activeName || foodList[0].name;
            const content=foodList.find(item=>item.name===_name);
            const contentList=content.spus;
            return (
                <Fragment>
                    <p className='content-title'><span>{_name}</span></p>
                    {
                        contentList.map((item,index)=>(
                            <OrderItem 
                                item={item} 
                                key={index} 
                                name={_name} 
                                handleAddClick={this.handleAddClick}
                                handleMinusClick={this.handleMinusClick}
                            />
                        ))
                    }
                </Fragment>
            )
        }
    }

    componentDidUpdate(){
        console.log('order render');
    }

    render(){
        return (
            <Fragment>
                <div className='detail-order'>
                    <div className='order-menu'>
                        {this.renderMenu()}
                    </div>
                    <div className='order-content'>
                        {this.renderContent()}
                    </div>
                </div>
                <Cart 
                    handleAddClick={this.handleAddClick}
                    handleMinusClick={this.handleMinusClick}
                />
            </Fragment>

        )
    }
}

const mapStateToProps=(state)=>{
    return {
        foodList:state.detail.foodList,
        activeName:state.detail.activeName,
        cartList:state.detail.cartList
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        changeMenuName(name){
            dispatch(actionCreators.changeMenuNameAction(name));
        },

        changeCartList(list){
            dispatch(actionCreators.changeCartListAction(list))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailOrder);