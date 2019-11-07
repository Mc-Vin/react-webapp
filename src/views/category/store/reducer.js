import { actionTypes } from './index';
import TABKEY from '../config';

const  defaultState={
    tabs:TABKEY,
    activeKey:'',
    categoryList:[],
    sortList:[],
    filterList:[],
    merchantList:[],
    toggle:true
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_TAB_ACTIVEKEY:
            return {...state,activeKey:action.activeKey}
        case actionTypes.INIT_TAB_DATA:
            const { categoryList, sortList, filterList }=action;
            return {...state, categoryList,sortList, filterList };
        case actionTypes.CHANGE_TOGGLE:
            return {...state,toggle:action.toggle};
        case actionTypes.INIT_CATEMERCHANT_DATA:
            const { merchantList }=action;
            return {...state, merchantList};
        default:
            return state;
    }
}