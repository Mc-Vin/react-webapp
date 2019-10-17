import TABKEY from '../config';

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

    ]
}

export default (state=defaultState,action)=>{
    return state;
}