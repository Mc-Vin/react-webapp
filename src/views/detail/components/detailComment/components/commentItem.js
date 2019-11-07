import React, { Fragment } from 'react';
import '../../style.scss';
import { connect } from 'react-redux';

class CommentItem extends React.Component{

    renderCommentItem(){
        const { commentList }=this.props;
        return (
            commentList.map((item,index)=>(
                <div className='comment-item' key={index}>
                    <div className='icon'>
                        <img src={item.user_pic_url} className='icon-img' />
                    </div>
                    <div className='content'>
                        <p className='content-title'>{item.user_name}<span className='date'>2018.3.18</span></p>
                        <div className='rate-time'>☆☆☆☆☆&nbsp;{item.ship_time}分钟送达</div>
                        <p className='comment-content'>{item.comment}</p>
                        <div className='comment-img'>
                            {
                                item.comment_pics.map((imgItem,index)=>(
                                    <img src={imgItem.url} className='img' key={index} />
                                ))
                            }
                        </div>
                        <div className='food-content'>
                            {item.praise_food_tip}
                        </div>
                        <div className='label'>
                            {
                                item.comment_labels.map((labelItem,index)=>{
                                    if(index==item.comment_labels.length-1){
                                        return <span key={index}>{labelItem.content}</span>
                                    }else{
                                        return <span key={index}>{`${labelItem.content},`}</span>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            ))
        )
    }

    render(){
        return (
            <Fragment>
                {this.renderCommentItem()}
            </Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        commentList:state.detail.commentList
    }
}


export default connect(mapStateToProps,null)(CommentItem);