import {combineReducers} from 'redux';
import { tabReducer } from '../components/bottomBar/store';


const reducer = combineReducers({
    tab:tabReducer,
})

export default reducer;