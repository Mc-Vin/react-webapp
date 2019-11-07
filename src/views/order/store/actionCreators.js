import {
    actionTypes
} from './index';
import axios from 'axios';

export const initOrderDataAction=()=>{
    return (dispatch)=>{
        axios.get('/api/orders.json')
        .then(res=>dispatch({
            type:actionTypes.INIT_ORDER_DATA,
            orderList:res.data.data.digestlist,
            initLoadingPage:1,
            initIsLoading:true,
        }))
        .catch(err=>{
            console.log(err);
        })
    }
}

export const scrollLoadAction = (page,isLoading) => {
    return (dispatch) => {
        axios.get('/api/orders.json')
            .then(res =>{
                dispatch({
                    type: actionTypes.SCROLL_LOAD,
                    page:page++,
                    isLoading,
                    nextOrderList: res.data.data.digestlist
                });
            }
            )
            .catch(err => {
                console.log(err);
            })
    }
}