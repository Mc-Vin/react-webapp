import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import './style.scss';
import { withRouter } from 'react-router-dom';

const useStyles=makeStyles(theme=>({
    root:{
        fontSize:'28px'
    },
    iconHover:{
        '&:hover':{
            color:red[800]
        }
    }
}))

function NavTitle(props) {
    const classes = useStyles();

    const handleIconClick=()=>{
        props.history.push('/home');
    }

    return (
        <div className='nav-title'>
            <div className='back-icon' onClick={handleIconClick}>
                <Icon className={`${classes.root} ${classes.iconHover}`}>arrow_back_ios</Icon>
            </div>
            {props.title}
        </div>
    );
}

export default withRouter(NavTitle);