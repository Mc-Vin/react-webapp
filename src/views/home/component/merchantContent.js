import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { MerchantContentWrapper } from '../style';
import { actionCreators } from '../store';
import ScrollView from '../../../components/scrollView';
import MerchantItem from '../../../components/merchantItem';
import PropTypes from 'prop-types';

class MerchantContent extends React.Component{
    static propTypes={
        merchantList:PropTypes.array.isRequired,
    }

    renderMerchantList(){
        const { merchantList }=this.props;
        return (
            <Fragment>
                {
                    merchantList.map((item,index)=>(
                        <MerchantItem item={item} key={index} />
                    ))
                }
            </Fragment>
        )
    }

    loadCallback(page,isLoading){
        if(page<4){
            page++;
            isLoading=page>1&&page<4?true:false;
            this.props.handleScrollLoad(page,isLoading);
        }
    }
     
    render(){
        const { page, isLoading }=this.props;
        return (
            <MerchantContentWrapper>
                <div className='title'>
                    <div className='line'></div>
                    <div className='near-merchant'>附近商家</div>
                    <div className='line'></div>
                </div>
                    <ScrollView 
                        loadCallback={this.loadCallback.bind(this,page,isLoading)} 
                        isLoading={isLoading}
                        page={page}
                    >
                        {
                            this.renderMerchantList()
                        }
                    </ScrollView>
            </MerchantContentWrapper>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        isLoading:state.home.isLoading,
        page:state.home.loadingPage
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleScrollLoad(page,isLoading){
            dispatch(actionCreators.scrollLoadAction(page,isLoading));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MerchantContent);