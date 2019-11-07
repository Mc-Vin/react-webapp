import React from 'react';
import MerchantItem from '../../../components/merchantItem';
import './style.scss';
import { actionCreators } from '../store';
import { connect } from 'react-redux';

class CateMerchant extends React.Component{
    componentWillMount(){
        this.props.initCateMerchantData();
    }
    
    render(){
        const { merchantList }=this.props;
        return (
            <div className='cate-merchant'>
                {
                    merchantList.map((item,index)=>(
                        <MerchantItem item={item} key={index} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        merchantList:state.category.merchantList
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        initCateMerchantData(){
            dispatch(actionCreators.initCateMerchantDataAction());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CateMerchant);