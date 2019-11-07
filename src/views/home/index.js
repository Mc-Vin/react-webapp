import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import './home.scss';
import Banner from './component/banner';
import SearchBar from './component/serachBar';
import IconList from './component/iconList';
import MerchantContent from './component/merchantContent';

class Home extends React.Component {
    render(){
        const { bannerList, iconList ,merchantList }=this.props;
        return (
            <div className='home-wrapper'>
                    <SearchBar />
                    <Banner bannerList={ bannerList } />
                    <IconList iconList={ iconList } />
                    <MerchantContent merchantList={ merchantList } />
            </div>
        );
    }

    componentDidMount(){
        this.props.initHomeData();
    }
}

const mapStateToProps=(state)=>{
    return {
        bannerList:state.home.bannerList,
        iconList:state.home.iconList,
        merchantList:state.home.merchantList
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        initHomeData(){
            dispatch(actionCreators. initHomeDataAction());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);