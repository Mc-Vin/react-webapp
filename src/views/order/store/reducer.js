import { actionTypes } from './index';

const  defaultState={
    orderList:[],
    loadingPage:1,
    isLoading:true
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.INIT_ORDER_DATA:
            const  { orderList, initLoadingPage,initIsLoading }=action;
            return {...state, orderList,loadingPage:initLoadingPage,isLoading:initIsLoading};
        case actionTypes.SCROLL_LOAD:
            const { nextOrderList, page, isLoading}=action;
            return {...state,orderList:[...state.orderList,...nextOrderList],loadingPage:page,isLoading}
        default:
            return state;
    }
}