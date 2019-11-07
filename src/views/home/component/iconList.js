import React from 'react';
import PropTypes from 'prop-types';
import { IconListWrapper } from '../style';
import { withRouter } from 'react-router-dom';

let Swiper = window.Swiper;
class IconList extends React.Component{
    static propTypes={
        iconList:PropTypes.array.isRequired
    }

    constructor(props){
        super(props);
        this.banner = React.createRef();
        this.pagination=React.createRef();
    }

    renderIconArray(){
        const { iconList }=this.props;
        //deep copy then iconList will not be changed everytime
        const _iconList=JSON.parse(JSON.stringify(iconList));
        const iconArray=[];
        if(_iconList.length){
            const index=Math.floor(_iconList.length/8);
            for(let i=0;i<=index;i++){
                iconArray[i]=_iconList.splice(0,8);
            }
            return iconArray;
        }
    }

    handleIconClick=()=>{
        this.props.history.push('/category');
    }

    componentDidUpdate(){
        this.swiper = new Swiper(this.banner.current, {
            autoplay: true,
            pagination: {
                el: this.pagination.current,
                type: 'bullets',
                clickable:true
              },
         });
    }

    render(){
        const iconArray=this.renderIconArray()||[];
        console.log(iconArray);
        return (
            <IconListWrapper>
                  <div>
                    <div className='swiper-container' ref={this.banner}>
                        <div className='swiper-wrapper'>
                          {
                            iconArray.map(item=>{
                                return (
                                    <div className='swiper-slide' key={item.id}>
                                        {
                                            item.map(subItem=>(
                                                <div 
                                                    className='icon' 
                                                    key={subItem.code}
                                                    onClick={this.handleIconClick}
                                                >
                                                    <div className='icon-img'>
                                                        <img className='icon-img-content' src={subItem.gray_url} />
                                                    </div>
                                                    <div className='icon-des'>{subItem.name}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            })
                          }
                        </div>
                        <div className='swiper-pagination' ref={this.pagination}></div>
                    </div>
                </div>
            </IconListWrapper>
        )
    }
}


export default withRouter(IconList);