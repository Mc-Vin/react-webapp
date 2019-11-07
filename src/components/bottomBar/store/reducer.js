import TABKEY from '../config';
import { actionTypes } from './index';

const defaultState={
    tabs:[
        {
            name:'首页',
            key:TABKEY.home
        },
        {
            name:'订单',
            key:TABKEY.order
        },
        {
            name:'我的',
            key:TABKEY.account
        },
    ],
    activeKey:TABKEY.home
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_ACTIVEKRY:
            const newState=JSON.parse(JSON.stringify(state));
            newState.activeKey=action.activeKey;
            return newState;
        default:
            return state;
    }
}