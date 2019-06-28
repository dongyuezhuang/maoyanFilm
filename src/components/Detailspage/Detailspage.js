import React, { Component } from 'react';
import {connect} from "react-redux";
import action from "../../store/actions/Detailspage/action.js";
import styled from 'styled-components';
import 'swiper/dist/css/swiper.css';
import Swiper from "swiper";
class Detailspage extends Component {
    componentDidMount(){
        console.log(this.props.location.state.params.id)
        this.props.handleGetCinemaDetail(this.props.location.state.params.id)
    }
    handlePutback(){
        this.props.history.goBack()
    }
    componentDidUpdate(){
        this.handleSwiper();
    }
    handleSwiper(){
         setTimeout(()=>{
             var mySwiper = new Swiper('.swiper-container',{
                slidesPerView : "auto",
                centeredSlides : true,
            })
         },100)
            
        
        
    }
    render() {
        return (
            <DPage>
                <header className="navbar">
                    <div className="nav-wrap-left">
                        <a className="back" href="#"><i className="iconfont" onClick={this.handlePutback.bind(this)}>&#xe602;</i></a>
                    </div>
                    <h1 className="nav-header">{this.props.cinemaTitle.nm}</h1>
                </header>

                <BODY className="body">
                    <div className="body-wrap">

                        <div className="cinema-wrap">
                            <div className="cinema-block">
                                <div className="cinema-info">
                                    <div className="title line-ellipsis">{this.props.cinemaTitle.nm}</div>
                                    <div className="location line-ellipsis">{this.props.cinemaTitle.addr}</div>
                                    <div className="location-icon" data-bid="dp_wx_cinema_map">
                                        <img src="data:image/png;base64,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" />
                                    </div>
                                </div>





                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                    {
                                        this.props.movies.map((item)=>{
                                            console.log()
                                            return (
                                                <div className="swiper-slide" key={item.id}>
                                                    <img src={item.img.slice(5,22)+148+"."+208+item.img.slice(25)} alt=""/>
                                                </div>
                                            )
                                        })
                                    }
                                        
                                    </div>    
                                </div>







                                <div className="movie-info">
                                    <div className="movie-title line-ellipsis">
                                        <span className="title">千与千寻</span>
                                        <span className="grade">
                                            <span>9.4<span className="small">分</span></span>
                                        </span>
                                    </div>
                                    <div className="movie-desc line-ellipsis">125分钟 | 动画 | 柊瑠美,周冬雨,入野自由</div>
                                </div>
                            </div>
                        </div>




                        <div className="nav-wrap">
                            <div className="nav-block mb-line-t">
                                <div className="nav-bar mb-line-b">
                                    <div className="nav-bar-wrap">
                                        <div className="nav-item active">
                                            <span className="date-title">今天6月27日</span>

                                        </div><div className="nav-item">
                                            <span className="date-title">明天6月28日</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="seat-wrap">
                            <div className="discount-block">
                                <div className="vip-tips">
                                    <a>
                                        <div className="label">折扣卡</div>
                                        <div className="label-text line-ellipsis">购票享低价，首单2张立减10元</div>
                                        <div className="process">20元开卡</div>
                                    </a>
                                </div>
                            </div>
                            <div className="seat-inner-wrap">
                                <div className="seat-list">
                                    <div className="list-wrap">
                                        <div className="item-outer mb-line-b" data-bid="dp_wx_cinema_show_item">
                                            <div className="item box-flex">
                                                <div className="time-block">
                                                    <div className="begin">10:25</div>
                                                    <div className="end">12:30<span className="tui">散场</span></div>
                                                </div>
                                                <div className="info-block">
                                                    <div className="lan">日语 2D</div>
                                                    <div className="hall">4号激光厅</div>
                                                </div>
                                                <div className="price">
                                                    <div className="sellPr"><span className="d">¥</span><span><span className="stonefont"></span></span></div>
                                                    <div className="vipPrice"><span className="icon">折扣卡</span><span className="num">¥21</span></div>
                                                    <div className="extraDesc">折扣卡首单特惠</div>
                                                </div>
                                                <div className="button-block">
                                                    <div className="button" data-bid="dp_wx_cinema_show_btn">购票</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </BODY>


            </DPage >
        );
    }
}
var mapState=(state)=>{
    console.log(11111,state.detailspage.movies)
    return {
        cinemaTitle:localStorage.cinemaTitle?JSON.parse(localStorage.cinemaTitle):state.cinema.cinemaTitle,
        movies:state.detailspage.movies
    }
}
var mapDispatch=(dispatch)=>{
    return {
        handlePutback(){
            dispatch(action.handlePutback())
        },
        handleGetCinemaDetail(id){
            console.log(id,5665)
            dispatch(action.handleGetCinemaDetail(id))
        }
    }
}
export default connect(mapState,mapDispatch)(Detailspage);





// --------------------------------------------css样式
const DPage = styled.div`
width: 100%;
height:100%;
header{
    height: 50.5px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    .nav-wrap-left {
        height: 50.5px;
        line-height: 50.5px;
        .back {
            height: 50px;
            width: 22.5px;
            line-height: 50px;
            padding: 0 15px;
            i{
                display: inline-block;
                width: 22.5px;
                height: 22.5px;
                font-size: 20px;
                color:#fff;
            }
        }
    }
    .nav-header {
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        line-height: 50px;
        margin: 0 52.5px 0 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
}
}
`
const BODY = styled.div`
.body-wrap {
    margin-bottom: 25px;
    div {
        background-color: #fff;
        .cinema-info {
            position: relative;
            padding: 15px 100px 15px 15px;
            .title {
                font-size: 17px;
                line-height: 24px;
                font-weight: 700;
                color: #333;
            }
            .location {
                margin-top: 2px;
                font-size: 13px;
                line-height: 18.5px;
                color: #999;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .location-icon {
                position: absolute;
                right: 0;
                top: 50%;
                width: 70px;
                height: 31px;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                border-left: 1px solid #d8d8d8;
                text-align: center;
                img {
                    display: inline-block;
                    width: 19px;
                    height: 22px;
                    margin-top: 5px;
                }
            }
        }

        .swiper-container{
            .swiper-wrapper{
                .swiper-slide{
                    width:2rem;
                    height:3rem;
                    img{
                        width:2rem;
                        height:3rem;
                        padding:.2rem;
                    }
                }
            }
        }

        .movie-info {
            padding: 11px 15px;
            text-align: center;
            .movie-title {
                height: 24px;
                line-height: 24px;
                font-size: 17px;
                color: #333;
                font-weight: 700;
                .grade {
                    color: #ffb400;
                    font-size: 16px;
                }
            }
            .movie-desc {
                margin-top: 2px;
                height: 18.5px;
                line-height: 18.5px;
                font-size: 13px;
                color: #999;
            }
        }
    }



    .nav-wrap{
        position: relative;
        .mb-line-t{
            background-size: 1px 1px;
            .nav-bar {
                position: relative;
                height: 45px;
                overflow: hidden;
                white-space: nowrap;
                background-size: 1px 1px;
                .nav-bar-wrap {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: -20px;
                    padding-bottom: 20px;
                    overflow: auto;
                    -webkit-overflow-scrolling: touch;
                    .nav-item{
                        color: #f03d37;
                        position: relative;
                        display: inline-block;
                        line-height: 45px;
                        height: 45px;
                        text-align: center;
                        font-size: 14px;
                        color: #666;
                    }
                    .nav-item:first-child {
                        margin-left: 15px;
                        margin-right: 15px;
                    }
                    .nav-item:last-child {
                        margin-right: 15px;
                    }
                }
            }
        }
    }





    .seat-wrap{
        .discount-block {
            padding-top: 1px;
            .vip-tips {
                margin-top: -1px;
                padding: 0 15px;
                height: 42px;
                line-height: 42px;
                background-color: #fff5ea;
                a {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    color: #777;
                    .label {
                        background-color: #ff941a;
                        -webkit-box-flex: 0;
                        -ms-flex: 0 0 auto;
                        flex: 0 0 auto;
                        display: inline-block;
                        border-radius: 2px;
                        font-size: 10px;
                        line-height: 15px;
                        height: 15px;
                        width: 34px;
                        text-align: center;
                        color: #fff;
                        margin-top: 13px;
                        margin-right: 10px;
                        background-color: #ff941a;
                    }
                    .label-text {
                        -webkit-box-flex: 1;
                        -ms-flex: 1 1 auto;
                        flex: 1 1 auto;
                        font-size: 12px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        color: #fa9600;
                        background-color: #fff5ea;
                    }
                    .process {
                        -webkit-box-flex: 0;
                        -ms-flex: 0 0 auto;
                        flex: 0 0 auto;
                        line-height: 42px;
                        color: #999;
                        font-size: 12px;
                        background-color: #fff5ea;
                    }
                    .process:after {
                        display: inline-block;
                        content: "";
                        width: 7px;
                        height: 7px;
                        border-left: 1px solid #ccc;
                        border-top: 1px solid #ccc;
                        -webkit-transform: rotate(135deg);
                        transform: rotate(135deg);
                    }
                }
            }
        }
        .seat-inner-wrap {
            min-height: 40px;
            position: relative;
            .item-outer {
                padding: 17px 0;
                margin-left: 12.5px;
                background-size: 1px 1px;
                /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMV…GdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==) 0 bottom repeat-x; */
                .item {
                    padding-right: 12.5px;
                    display: flex;
                    .time-block {
                        position: relative;
                        .begin {
                            font-size: 20px;
                            color: #333;
                            line-height: 1;
                            white-space: nowrap;
                        }
                        .end {
                            margin-top: 10px;
                            color: #999;
                            font-size: 11px;
                            line-height: 1;
                            white-space: nowrap;
                            .tui {
                                margin-left: 4px;
                                display: inline-block;
                                -webkit-transform: translateY(-.5px);
                                transform: translateY(-.5px);
                            }
                        }
                    }
                    .info-block {
                        margin-left: 17px;
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        overflow-x: hidden;
                        .lan {
                            margin-top: 2px;
                            line-height: 18px;
                            font-size: 13px;
                            color: #333;
                            white-space: normal;
                        }
                        .hall {
                            margin-top: 7px;
                            font-size: 11px;
                            color: #999;
                            white-space: normal;
                        }
                    }
                    .price {
                        -webkit-box-flex: 0;
                        -ms-flex: 0 1 auto;
                        flex: 0 1 auto;
                        width: 130px;
                        margin-left: 5px;
                        .sellPr {
                            display: inline-block;
                            line-height: 1;
                            color: #f03d37;
                            margin-top: 1px;
                            font-size: 19px;
                            .d {
                                color: 13px;
                                font-size: 11px;
                            }
                            .stonefont {
                                font-family: 'stonefont';
                            }
                        }
                        .vipPrice {
                            display: inline-block;
                            line-height: 15px;
                            height: 15px;
                            -webkit-transform: scale(.8);
                            transform: scale(.8);
                            -webkit-transform-origin: left;
                            transform-origin: left;
                            margin-right: -16px;
                            border: 1px solid #ff9000;
                            border-radius: 2px;
                            font-size: 12px;
                            .icon{
                                display: inline-block;
                                padding: 0 2px;
                            }
                            .num {
                                color: #f90;
                                background-color: #fff;
                            }
                        }
                        .extraDesc {
                            margin-top: 5px;
                            display: block;
                            font-size: 11px;
                            color: #999;
                        }
                    }
                    .button-block {
                        width: 45px;
                        margin-left: 2px;
                        position: relative;
                        .button {
                            position: absolute;
                            top: 50%;
                            -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                            width: 100%;
                            height: 27px;
                            line-height: 28px;
                            font-size: 12px;
                            background-color: #f03d37;
                            color: #fff;
                            border-radius: 4px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }








}
`