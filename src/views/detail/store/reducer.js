import { actionTypes } from './index';

const defaultState={
    foodList:[],
    storeName:'',
    activeName:'',
    commentList:[],
    cartList:[],
    cartShow:false,
    loadingPage:1,
    isLoading:true
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.INIT_DETAIL_DATA:
            const { foodList, storeName }=action;
            return {...state,foodList,storeName };
        case actionTypes.CHANGE_MENU_NAME:
            const { activeName }=action;
            return {...state,activeName };
        case actionTypes.INIT_COMMENT_DATA:
            const { commentList }=action;
            return {...state,commentList};
        case actionTypes.SCROLL_LOAD:
            const { nextCommentList, page ,isLoading }=action;
            return {...state,commentList:[...state.commentList,...nextCommentList], loadingPage:page, isLoading};
        case actionTypes.CHANGE_CART_SHOW:
            const { cartShow }=action;
            return {...state,cartShow};
        case actionTypes.CHANGE_CART_LIST:
            const { cartList }=action;
            return {...state,cartList};
        default:
            return state;
    }
}