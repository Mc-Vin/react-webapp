import React from 'react';
import './style.scss';
import NavTitle from '../../components/navTitle';
import CateTab from './components/cateTab';
import CateMerchant from './components/cateMerchant';

class Category extends React.Component{
    render(){
        return (
            <div className='category'>
                <NavTitle title='分类' />
                <CateTab />
                <CateMerchant />
            </div>
        );
    }
}

export default Category;