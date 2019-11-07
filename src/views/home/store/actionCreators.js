import {
    actionTypes
} from './index';
import axios from 'axios';

export const initHomeDataAction = () => {
    return (dispatch) => {
        axios.get('/api/head.json')
            .then(res => dispatch({
                type: actionTypes.INIT_HOME_DATA,
                data: res.data.data,
                loadingPage:1,
                isLoading:true,
            }))
            .catch(err => console.log(err))
    }
}

export const scrollLoadAction = (page,isLoading) => {
    return (dispatch) => {
        axios.get('/api/listparams.json')
            .then(res =>{
                dispatch({
                    type: actionTypes.SCROLL_LOAD,
                    page:page++,
                    isLoading,
                    nextMerchantList: res.data.data.poilist
                });
            }
            )
            .catch(err => {
                console.log(err);
            })
    }
}