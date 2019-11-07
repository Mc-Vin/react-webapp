import React from 'react';
import PropTypes from 'prop-types';
import { BannerWrapper } from '../style';

let Swiper = window.Swiper;
class Banner extends React.Component{
    static propTypes={
        bannerList:PropTypes.array.isRequired
    }

    constructor(props){
        super(props);
        this.banner = React.createRef();
        this.pagination=React.createRef();
    }
 
    componentDidUpdate(){
        this.swiper = new Swiper(this.banner.current, {
            loop:true,
            autoplay: true,
            pagination: {
                el: this.pagination.current,
                type: 'bullets',
                clickable:true
              },
         });
    }

    render(){
        const { bannerList } =this.props;
        return (
            <BannerWrapper>
                <div>
                    <div className='swiper-container' ref={this.banner}>
                        <div className='swiper-wrapper'>
                          {
                            bannerList.map(item=>{
                                return (
                                    <div className='swiper-slide' key={item.id}>
                                        <img className='bannerImg' src={item.imgUrl} />
                                    </div>
                                )
                            })
                          }
                        </div>
                        <div className='swiper-pagination' ref={this.pagination}></div>
                    </div>
                </div>
            </BannerWrapper>
        );
    }
}

export default Banner;