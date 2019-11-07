import React from 'react';
import { SearchBarWrapper } from '../style';

function SearchBar(){
    return (
        <SearchBarWrapper>
                <div className='location'>
                    <i className='place iconfont'>&#xe6b2;</i>
                    <span className='city'>location...</span>
                </div>
                <div className='input-box'>
                    <input placeholder='请输入商品或商家名称' />
                    <div className='iconfont search-icon'>&#xe62b;</div>
                </div>
        </SearchBarWrapper>
    );
}

export default SearchBar;