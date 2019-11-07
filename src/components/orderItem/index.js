import React,{Fragment} from 'react';
import './style.scss';
import { withStyles } from '@material-ui/styles';
import Icon from '@material-ui/core/Icon';


const styles=theme=>({
    add:{
        color:'#fbc02d',
        fontSize:'28px'
    },
    minus:{
        color:'#e3e3e3',
        fontSize:'28px',
    }
})

class OrderItem extends React.Component{
    state={
        num:0
    }

    handleAddClick=(item)=>{
        this.setState((preState)=>{
            return {
                num:++preState.num
            }
        },this.props.handleAddClick(item))
    }

    handleMinusClick=(item)=>{
        if(this.state.num>=1){
            this.setState((preState)=>{
                return {
                    num:--preState.num
                }
            },this.props.handleMinusClick(item))
        }
    }


    renderMinusButton(item){
        const { classes }=this.props;
        if(this.state.num!==0){
            return (
                <Fragment>
                    <span className='num'>{this.state.num}</span>
                    <span className="minus">
                        <Icon 
                            className={classes.minus}
                            onClick={()=>this.handleMinusClick(item)}
                        >
                            remove_circle_outline
                        </Icon>
                    </span>
                </Fragment>
            )
        }else{
            return null;
        }
    }

    render(){
        const { classes,item,name}=this.props;
        return (
            <Fragment>
                <div className='content-item'>
                    <div className='icon'>
                        <img src={item.picture} className='icon-img' />
                    </div>
                    <div className='content'>
                        <p className='content-title'>{item.name}</p>
                        <div className='food-content'>{item.description}</div>
                        <div className='like'>赞{item.praise_num}</div>
                        <div className='price-add'>
                            <span className='price'><i>{item.min_price}</i>/例</span>
                            <span className="add">
                                <Icon className={classes.add} onClick={()=>this.handleAddClick(item)}>add_circle</Icon>
                            </span>
                            {this.renderMinusButton(item)}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(OrderItem);;


