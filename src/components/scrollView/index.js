import React, { Fragment } from 'react';
import './style.scss';

class ScrollView extends React.Component{
    handleScroll=()=>{
        let { page, isLoading }=this.props;
        const clientHeight=document.documentElement.clientHeight;
        const scrollHeight=document.body.scrollHeight;
        const scrollTop=document.documentElement.scrollTop;
        const proLoadPara=-20;
        if(scrollTop+clientHeight-scrollHeight>=proLoadPara){
            this.props.loadCallback && this.props.loadCallback(page,isLoading);
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }

    render(){
        return (
            <Fragment>
                {this.props.children}
                {this.props.isLoading?(<div className='is-loading'>Loading</div>):(<div className='is-loading'>End</div>)}
            </Fragment>
        );
    }
}

export default ScrollView;