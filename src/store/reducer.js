import { combineReducers } from 'redux';
import { tabReducer } from '../components/bottomBar/store';
import { homeReducer } from '../views/home/store';
import { orderReducer } from '../views/order/store';
import { categoryReducer } from '../views/category/store';
import { detailReducer } from '../views/detail/store';


const reducer = combineReducers({
    tab:tabReducer,
    home:homeReducer,
    order:orderReducer,
    category:categoryReducer,
    detail:detailReducer
})

export default reducer;