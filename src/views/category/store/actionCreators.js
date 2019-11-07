import {
    actionTypes
} from './index';
import axios from 'axios';

export const changeTabActiveKeyAction=(key)=>{
    return {
        type:actionTypes.CHANGE_TAB_ACTIVEKEY,
        activeKey:key
    }
}

export const initTabDataAction=()=>{
    return (dispatch)=>{
        axios.get('/api/filter.json')
        .then(res=>dispatch({
            type:actionTypes.INIT_TAB_DATA,
            categoryList:res.data.data.category_filter_list,
            sortList:res.data.data.sort_type_list,
            filterList:res.data.data.activity_filter_list
        }))
        .catch(err=>console.log(err));
    }
}

export const changeToggleAction=(toggle)=>{
    return {
        type:actionTypes.CHANGE_TOGGLE,
        toggle
    }
}

export const initCateMerchantDataAction = () => {
    return (dispatch) => {
        axios.get('/api/head.json')
            .then(res => dispatch({
                type: actionTypes.INIT_CATEMERCHANT_DATA,
                merchantList: res.data.data.poilist
            }))
            .catch(err => console.log(err))
    }
}