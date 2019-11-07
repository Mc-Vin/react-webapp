import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import '../style.scss';
import { actionCreators } from '../store';

class Cart extends React.Component{
    handleAddClick=(item)=>{
        this.props.handleAddClick(item);
    }

    handleMinusClick=(item)=>{
        this.props.handleMinusClick(item);
    }

    

    handleClearBin=()=>{
        this.props.changeCartList([]);
        this.props.changeCartShow(true);
    }

    handleCartClick=()=>{
        const { cartShow }=this.props;
        this.props.changeCartShow(cartShow);
    }

    renderIconNum=()=>{
        const { cartList } =this.props;
        let total_num=0;
        if(cartList.length){
            cartList.forEach(item=>(
                total_num+=item.total_num
            ))
        }
        return total_num;
    }

    renderTotalPrice(){
        const { cartList } =this.props;
        let total_price=0;
        if(cartList.length){
            cartList.forEach(item=>(
                total_price+=item.min_price*item.total_num
            ))
        }
        return total_price;
    }


    renderCartContent(){
        const { cartList, cartShow } =this.props;
        if (cartShow){
            return (
                <div className='cart-content'>
                    <p className='title'>
                        <img src='../../../../static/img/bin.jpeg' />
                        <span onClick={this.handleClearBin}>清空购物车</span>
                    </p>
             
                    {
                        cartList.map(item=>{
                            if(item.total_num){
                                return (
                                    <div className='content'>
                                        <div className='food-name'>{item.name}</div>
                                        <div className='price'>￥{item.min_price*item.total_num}</div>
                                        <div className='change-num'>
                                            <img src='../../../../static/img/minus.png' onClick={()=>this.handleMinusClick(item)}></img>
                                            {item.total_num}
                                            <img src='../../../../static/img/add.png' onClick={()=>this.handleAddClick(item)}></img>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        )
                    }
                </div>
            )
        }else{
            return null;
        }
    }

    render(){
        return (
            <div className='cart'>
                {this.renderCartContent()}
                <div className='cart-tab'>
                    <div className='icon' onClick={this.handleCartClick}>
                        <img className='icon-img' src='../../../../static/img/cart.png' />
                        <div className='item-num'>{this.renderIconNum()}</div>
                    </div>
                    <div className='price'>
                        <p className='total-price'>￥{this.renderTotalPrice()}</p>
                        <p className='delivery-price'>另需配送￥9</p>
                    </div>
                    <div className='translation'>去结算</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        cartList:state.detail.cartList,
        cartShow:state.detail.cartShow
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        changeCartShow(cartShow){
            dispatch(actionCreators.changeCartShowAction(cartShow));
        },

        changeCartList(list){
            dispatch(actionCreators.changeCartListAction(list))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
