import { actionTypes } from './index';

export const changeActivekeyAction=(key)=>{
    return {
        type:actionTypes.CHANGE_ACTIVEKRY,
        activeKey:key
    }
}