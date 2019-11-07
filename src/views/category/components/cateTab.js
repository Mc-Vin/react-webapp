import React, { Fragment } from 'react';
import './style.scss';
import { actionCreators} from '../store';
import { connect } from 'react-redux';

class CateTab extends React.Component{
    constructor(){
        super();
        this.categoryItemRef=React.createRef()
    }

    handTabClick=(key)=>{
        const { activeKey,toggle }=this.props;
        const preKey=activeKey;
        if(key==preKey&&toggle==true){
            this.props.changeToggle(false);
        }else{
            this.props.changeActiveKey(key);
            this.props.changeToggle(true);
        }
    }

    handleCategoryItemClick=(cateItem)=>{
        const { categoryList }=this.props;
        categoryList.map(item=>(
            item.sub_category_list.map(subItem=>(
                subItem.clicked=false
            ))
        ));
        categoryList.map(item=>{
            const foundItem=item.sub_category_list.find(subItem=>(
                subItem.name===cateItem.name
            ));
            if(foundItem){
                foundItem.clicked=true;
            }
        });
        this.props.changeToggle(false);
    }

    handleSortItemClick=(sortItem)=>{
        const { sortList } =this.props;
        sortList.map(item=>(
            item.clicked=false
        ))
        const foundItem=sortList.find(item=>item.name===sortItem.name);
        if(foundItem){
            foundItem.clicked=true;
        }
        this.props.changeToggle(false);
    }

    handleFilterItemClick=(filterItem)=>{
        const { filterList }=this.props;
        filterList.map(item=>(
            item.items.map(subItem=>(
                subItem.clicked=false
            ))
        ));
        filterList.map(item=>{
            const foundItem=item.items.find(subItem=>(
                subItem.name===filterItem.name
            ));
            if(foundItem){
                foundItem.clicked=true;
            }
        });
        this.props.changeToggle(false);
    }

    renderTabs(){
        const { tabs, activeKey ,toggle }=this.props;
        return (
            tabs.map(item=>{
                let cls_tab;
                if(item.key===activeKey&&toggle===true){
                    cls_tab=`${item.key} current`
                }else{
                    cls_tab=`${item.key}`
                }
                return (
                    <div 
                        className={`cate-item ${cls_tab}`} 
                        key={item.name}
                        onClick={()=>this.handTabClick(item.key)}
                    >
                        {item.name}
                    </div>
                )
            })
        )
    }

    renderPanel(activeKey){
        switch(activeKey){
            case 'cate':
                return (
                    <div className='panel'>
                        {this.renderCategory()}
                    </div>
                )
            case 'sort':
                return (
                    <div className='panel'>
                        {this.renderSort()}
                    </div>
                )
            case 'filter':
                return (
                    <div className='panel'>
                        {this.renderFilter()}
                    </div>
                )
            default:
                return;
        }
    }

    renderCategory(){
        const { categoryList }=this.props;
        return (
            <Fragment>
                {
                    categoryList.map(item=>(
                        <div className='cate-title'>
                            <p className='cate-name'>{`${item.name} ${item.quantity}`}</p>
                            <div className='cate-content'>
                                {
                                    item.sub_category_list.map(subItem=>(
                                        <div 
                                            className={subItem.clicked?'cate-content-item clicked':'cate-content-item'}
                                            onClick={()=>this.handleCategoryItemClick(subItem)}
                                        >
                                            {`${subItem.name}(${subItem.quantity})`}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }

            </Fragment>
        );
    }

    renderSort(){
        const { sortList } =this.props;
        return (
            <Fragment>
                {
                    sortList.map(item=>(
                        <div 
                            className={item.clicked?'cate-sort clicked':'cate-sort'}
                            onClick={()=>this.handleSortItemClick(item)}
                        >
                            {item.name}
                        </div>
                    ))
                }
            </Fragment>
        )
    }

    renderFilter(){
        const { filterList } =this.props;
        return (
            <Fragment>
                {
                    filterList.map(item=>(
                        <div className='cate-filter'>
                            <p className='filter-title'>{item.group_title}</p>
                            <div className='filter-content'>
                                {
                                    item.items.map(subItem=>(
                                        <div 
                                            className={subItem.clicked?'filter-content-item clicked':'filter-content-item'}
                                            onClick={()=>this.handleFilterItemClick(subItem)}
                                        >
                                            {subItem.name}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </Fragment>
        )
    }

    componentWillMount(){
        this.props.initTabData();
    }

    render(){
        const { activeKey,toggle }=this.props;
        return (
            <Fragment>
            <div className='cate-tab'>
                <div className='tabs'>
                    {this.renderTabs()}
                </div>
                { toggle?this.renderPanel(activeKey):null }
            </div>
            </Fragment>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        tabs:state.category.tabs,
        toggle:state.category.toggle,
        activeKey:state.category.activeKey,
        categoryList:state.category.categoryList,
        sortList:state.category.sortList,
        filterList:state.category.filterList
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        changeActiveKey(key){
            dispatch(actionCreators.changeTabActiveKeyAction(key));
        },

        initTabData(){
            dispatch(actionCreators.initTabDataAction());
        },

        changeToggle(toggle){
            dispatch(actionCreators.changeToggleAction(toggle));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CateTab);