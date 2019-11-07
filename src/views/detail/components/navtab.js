import React from 'react';
import TABKEY from '../config';
import { NavLink as Link } from 'react-router-dom';
import { height } from '@material-ui/system';

class NavTab extends React.Component{
    render(){
        return (
            <div className='nav-tab'>
                {
                    TABKEY.map((item,index)=>(
                        <Link 
                            to={`/detail/${this.props.id}/${item.key}`} 
                            className='nav-item'
                            key={index}
                        >
                            {item.name}
                        </Link>
                    ))
                }
            </div>

        )
    }
}

export default NavTab;