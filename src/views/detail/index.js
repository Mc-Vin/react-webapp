import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import NavTitle from '../../components/navTitle';
import NavTab from './components/navtab';
import DetailOrder from './components/detailOrder';
import DetailComment from './components/detailComment/index';
import MerchantInfo from './components/merchantInfo';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class Detail extends React.Component{
    componentDidMount(){
        this.props.initDetailData();
    }

    render(){
        const {id}=this.props.match.params
        return (
            <Fragment>
                <NavTitle title={this.props.storeName} />
                <Router>
                    <NavTab id={id}/>
                    <Switch>
                        <Route path={`/detail/${id}/order`} component={DetailOrder} exact />
                        <Route path={`/detail/${id}/comment`} component={DetailComment} exact />
                        <Route path={`/detail/${id}/merchant-info`} component={MerchantInfo} exact />
                        {/* <Redirect to={`/detail/${id}/order`} from={`/detail/${id}/`}  exact/> */}
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        storeName:state.detail.storeName
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        initDetailData(){
            dispatch(actionCreators.initDetailDataAction());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));