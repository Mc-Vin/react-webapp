import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import CommentItem from './components/commentItem';
import ScrollView from '../../../../components/scrollView';
import '../style.scss';

class DetailComment extends React.Component{

    loadCallback(page,isLoading){
        if(page<4){
            page++;
            isLoading=page>1&&page<4?true:false;
            this.props.handleScrollLoad(page,isLoading);
        }
    }

    componentWillMount(){
        this.props.initCommentData();
        this.props.handleScrollLoad(1,true);
    }

    render(){
        const { isLoading, page }=this.props;
        console.log(page);
        return (
            <div className='detail-comment'>
                <div className='comment-title'>
                    <div className='title-left'>
                        <h2 className='num'>4.6</h2>
                        <p className='comment'>商家评价</p>
                    </div>
                    <div className='title-middle'>
                        <p className='flavor'>口味&nbsp;&nbsp;☆☆☆☆☆&nbsp;&nbsp;4.6</p>
                        <p className='wrapping'>包装&nbsp;&nbsp;☆☆☆☆☆&nbsp;&nbsp;4.5</p>
                    </div>
                    <div className='title-right'>
                        <h2 className='num'>4.6</h2>
                        <p className='comment'>商家评价</p>
                    </div>
                </div>
                <div className='comment-content'>
                    <ScrollView
                        loadCallback={this.loadCallback.bind(this,page,isLoading)} 
                        isLoading={isLoading}
                        page={page}
                    >
                        <CommentItem />
                    </ScrollView>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        page:state.detail.loadingPage,
        isLoading:state.detail.isLoading
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        initCommentData(){
            dispatch(actionCreators.initCommentDataAction());
        },

        handleScrollLoad(page,isLoading){
            dispatch(actionCreators.scrollLoadAction(page,isLoading));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailComment);