import React, { Component } from 'react';
import styled from 'styled-components'
import action from "../../../store/reducer/Film/action"
import { connect } from "react-redux"
import Swiper from "swiper"
import 'swiper/dist/css/swiper.css'

class Show extends Component {
    componentDidMount() {
        this.props.handleData();
        this.props.handleTime();

    }
    componentDidUpdate() {
        new Swiper('.swiper-container', {
            freeMode: true,
            slidesPerView: 3,
            // autoplay:true,
            // loop:true,
        });
    }
    render() {
        return (
            <Div>
                {/*轮播导航 */}
                <div className="show-lately">
                    <p className="show-title">近期最受期待</p>
                    <div className="swiper-container" >
                        <div className="show swiper-wrapper">
                            {
                                this.props.com ? this.props.com.map((item, index) => {
                                    return <div className="swiper-slide" key={index}>
                                        <div className="show-content">
                                            <div className="show-poster"><img src={item.img.slice(5,22)+148+"."+208+item.img.slice(25)} /><span>{item.wish}人想看</span></div>
                                            <h5>{item.nm}</h5>
                                            <p>{item.comingTitle}</p>
                                        </div>

                                    </div>
                                }) : ""

                            }
                        </div>
                    </div>
                </div>
                {/*电影列表 */}



                <div className="show-list">
                    <p className="show-list-title">6月28日周五</p>
                    {
                        this.props.time ? this.props.time.map((item, index) => {
                            return  <div className="show-list-box" key={index}>
                                <div className="list-img"><img src={item.img.slice(5,22)+148+"."+208+item.img.slice(25)} /></div>
                                <div className="list-cont">
                                    <div className='list-cont-l'>
                                        <div className="list-left-t"><span>{item.nm}</span><span>3DiMAX</span></div>
                                        <div className="list-left-b">
                                            <div><span>{item.wish}</span>人想看</div>
                                            <div><span>{item.star}</span></div>
                                            <div>{item.rt}上映</div>
                                        </div>
                                    </div>
                                    <div className='list-cont-r'><span>预售</span></div>
                                </div>
                            </div>
                        }) : ''
                    }
                </div>


            </Div >
        );
    }
}
var mapState = (state) => {
    console.log(state.film.Times)
    return {
        com: state.film.coming.coming,
        time: state.film.Times
    }
}

var mapActions = (dispatch) => {
    return {
        handleData() {
            dispatch(action.getDatas())
        },
        handleTime() {
            dispatch(action.getTimes())
        }
    }
}
export default connect(mapState, mapActions)(Show);




const Div = styled.div`
        background:#f5f5f5;
        height:100%;
        width:100%;
        position:absolute;
        top:1.86rem;
        //轮播导航样式
        .show-lately{
            padding: .2rem 0 .2rem .3rem;
            background-color: #fff;
            margin-bottom: .1rem;
            overflow:hidden;
            .show-title{
                margin: 0 0 .2rem;
                font-size: .3rem;
                color: #333;
            }
            .swiper-container{
                // display:initial;
                    .swiper-wrapper{
                        // overflow: scroll;
                        white-space: nowrap;
                        // display: initial;
                        .swiper-slide{
                            display: inherit;
                            width:auto;
                            .show-content{
                                display: inline-block;
                                // width: 2rem;
                                overflow: hidden;
                                margin-right: .1rem;
                                .show-poster{
                                    width: 2rem;
                                    height: 2.7rem;
                                    position: relative;
                                    margin-bottom: .1rem;
                                    img{
                                        width:100%;
                                        height:100%;
                                    }
                                    span{
                                        display: inline-block;
                                        position: absolute;
                                        left: .1rem;
                                        bottom: .02rem;
                                        color: #faaf00;
                                        font-size: .2rem;
                                        font-weight: 600
                                    }
                                }
                                h5{
                                    margin: 0 0 .03rem;
                                    font-size: .26rem;
                                    color: #222;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    width:70%;
                                }
                                p{
                                    margin: 0;
                                    font-size: .24rem;
                                    color: #999;
                                }
                            }
                        }
                        
                    }
                } 
            
            }
.show-list{
    background:#fff;
    .show-list-title{
        padding: .2rem 0 0 .2rem;
        font-size: .3rem;
        color: #333;
    }
         .show-list-box{
            display:flex;
            align-items: center;
            .list-img{
                 width: 1.4rem;
                 height:100%
                margin-left:.2rem;
                img{
                    width: 1.4rem;
                    height: 100%;
                     display: block; 
                 } 
            }
            .list-cont{
                justify-content:space-between;
                display:flex;
                width: 70%;
                border-bottom: 1px solid #e6e6e6;
                padding: .2rem 0 .2rem .1rem;
                .list-cont-l{
                    padding:.1rem .2rem;
                    width:70%;
                    .list-left-t{
                        margin-bottom: .07rem;
                        display:flex;
                        align-items: center;
                        span:nth-of-type(1){
                            width:60%;
                            font-size:.4rem;
                            color: #333;
                            font-weight: 700;
                            padding-right:.1rem;
                            flex-shrink: 1;
                            display:inline-block;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        span:nth-of-type(2){
                            border:1px solid #3c9fe6;
                            width: 1.1rem;
                            height: .35rem;
                            border-radius: .1rem;
                            background: #f4f4f4;
                            color: #3c9fe6;
                        }
                    }
                    .list-left-b{
                        color:#666;
                        font-size:.32rem;
                        div:nth-of-type(1){
                            span{
                                font-weight: 700;
                                color: #faaf00;
                                font-size: .34rem;
                                margin-left:.1rem;
                            }
                        }
                        div:nth-of-type(2){
                            width:90%;
                            margin-top:.1rem;
                            span{
                                display: inline-block;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                width: 100%;
                            }
                        }
                        div:nth-of-type(3){
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            width: 90%;
                        }
                    }
                }
                .list-cont-r{
                    width:20%;
                    position: relative;
                    right:.4rem;
                    span{
                        position:absolute;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                        left: 0;
                        display: inline-table;
                        // background:#3c9fe6;
                        background:red;
                         width: 1.1rem;
                        height: .6rem;
                        line-height:.6rem;
                        text-align:center;
                        border-radius: .1rem;
                        color: #fff;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
`