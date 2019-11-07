import {
    actionTypes
} from './index';
import axios from 'axios';

export const initDetailDataAction = () => {
    return (dispatch) => {
        axios.get('/api/food.json')
            .then(res => dispatch({
                type: actionTypes.INIT_DETAIL_DATA,
                foodList:res.data.data.food_spu_tags,
                storeName:res.data.data.poi_info.name
            }))
            .catch(err => console.log(err))
    }
}

export const changeMenuNameAction=(name)=>{
    return {
        type:actionTypes.CHANGE_MENU_NAME,
        activeName:name
    }
}

export const initCommentDataAction=()=>{
    return (dispatch)=>{
        axios.get('/api/comments.json')
        .then(res=>(
            dispatch({
                type:actionTypes.INIT_COMMENT_DATA,
                commentList:res.data.data.comments
            })
            )
        )
        .catch(err=>console.log(err));
    }
}

export const scrollLoadAction = (page,isLoading) => {
    return (dispatch) => {
        axios.get('/api/comments.json')
            .then(res =>{
                dispatch({
                    type: actionTypes.SCROLL_LOAD,
                    page:page++,
                    isLoading,
                    nextCommentList:res.data.data.comments
                });
            }
            )
            .catch(err => {
                console.log(err);
            })
    }
}

export const changeCartShowAction=(cartShow)=>{
    return {
        type:actionTypes.CHANGE_CART_SHOW,
        cartShow:!cartShow
    }
}

export const changeCartListAction=(list)=>{
    return {
        type:actionTypes.CHANGE_CART_LIST,
        cartList:list
    }
}
