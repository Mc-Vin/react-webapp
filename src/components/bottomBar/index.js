import React from 'react';
import { NavLink } from 'react-router-dom';
import { BottomBarWrapper } from './style';
import { connect } from 'react-redux';


class BottomBar extends React.Component{
    barRender(){
        const { tabs }=this.props;
        return (
            tabs.map((tabItem)=>(
            <NavLink to={`/`+`${tabItem.key}`} className='btn-bar' key={tabItem.name}>
                <div className={`bar-icon ${tabItem.key}`}></div>
                <div className='bar-key'>{tabItem.name}</div>
            </NavLink>
            ))
        );
    }

    render(){
        return <BottomBarWrapper>{this.barRender()}</BottomBarWrapper>
    }
}

const mapStateToProps=(state)=>{
    return {
        tabs:state.tab.tabs
    }
}

export default connect(mapStateToProps, null)(BottomBar)