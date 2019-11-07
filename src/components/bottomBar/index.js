import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import { BottomBarWrapper } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';


class BottomBar extends React.Component{
    componentWillMount(){
        const path=this.props.location.pathname.replace(/[^a-zA-Z0-9]/,'');
        this.props.handleNavClick(path);
    }

    barRender(){
        const { tabs, activeKey, handleNavClick }=this.props;
        return (
            tabs.map((tabItem)=>{
                let activeClass;
                if(tabItem.key===activeKey){
                    activeClass=`btn-bar active`;
                }else{
                    activeClass=`btn-bar`;
                }
                return (
                    <NavLink 
                        to={`/${tabItem.key}`} 
                        className={activeClass} 
                        key={tabItem.name} 
                        // activeClassName={'btn-bar active'}
                        onClick={()=>handleNavClick(tabItem.key)}
                    >
                        <div className={`bar-icon ${tabItem.key}`}></div>
                        <div className='bar-key'>{tabItem.name}</div>
                    </NavLink>
                );
            })
        );
    }

    render(){
        return <BottomBarWrapper>{this.barRender()}</BottomBarWrapper>
    }
}

const mapStateToProps=(state)=>{
    return {
        tabs:state.tab.tabs,
        activeKey:state.tab.activeKey
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleNavClick(key){
            dispatch(actionCreators.changeActivekeyAction(key))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BottomBar))