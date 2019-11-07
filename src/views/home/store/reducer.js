import { actionTypes } from './index';

const defaultState={
    bannerList:[],
    iconList:[],
    merchantList:[],
    isLoading:true,
    loadingPage:1
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.INIT_HOME_DATA:
            const newState=JSON.parse(JSON.stringify(state));
            newState.bannerList=action.data.bannerList;
            newState.iconList=action.data.primary_filter;
            newState.merchantList=action.data.poilist;
            newState.isLoading=action.isLoading;
            newState.loadingPage=action.loadingPage
            return newState;
        case actionTypes.SCROLL_LOAD:
            const { nextMerchantList, page ,isLoading }=action;
            return {...state,merchantList:[...state.merchantList,...nextMerchantList], loadingPage:page, isLoading};
        default:
            return state;
    }
}