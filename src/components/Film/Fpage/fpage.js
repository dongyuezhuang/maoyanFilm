import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import action from "../../../store/reducer/Film/action"
import { connect } from "react-redux"
class Fpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            d: "block",
        }
        console.log(this.props)
    }

    componentDidMount() {
        this.props.handleDis();
        this.handleDisplay();
        this.props.handleCinList();
    }
    handleDisplay() {
        this.setState({
            flag: !this.state.flag,
            d: this.state.d === "none" ? this.state.d = "block" : this.state.d = "none"
        })
    }
    render() {
        return (
            <Div>
                {/* 头部 */}
                <div className="detail-header">
                    <NavLink to="/film/hot"> <span className="iconfont">&#xe602;</span></NavLink>
                    <span className="detail">{this.props.detailMovie.detailMovie.nm}</span>
                </div>
                {/* 电影介绍 */}
                <div className="detail-list">
                    <div className="detail-ti"></div>
                    <div className="detail-bg"></div>
                    <div className="detail-content">
                        <div className="detail-img"><img src={this.props.detailMovie.detailMovie.img.slice(5,22)+148+"."+208+this.props.detailMovie.detailMovie.img.slice(25)} /></div>
                        <div className="detail-cont">
                            <div>{this.props.detailMovie.detailMovie.nm}</div>
                            <div>{this.props.detailMovie.detailMovie.enm}</div>
                            <div>{this.props.detailMovie.detailMovie.sc}<span>(3.4万人评)</span></div>
                            <div><span>{this.props.detailMovie.detailMovie.cat}</span></div>
                            <div>{this.props.detailMovie.detailMovie.fra}/{this.props.detailMovie.detailMovie.dur}分钟</div>
                            <div>{this.props.detailMovie.detailMovie.pubDesc}</div>
                        </div>
                    </div>
                    <div className="detail-ico"><span className="iconfont">&#xe534;</span></div>
                </div>
                {/* 时间导航 */}
                <div className="detail-time">
                    <ul>
                        <li>今天06月28日</li>
                        <li>今天06月28日</li>
                        <li>今天06月28日</li>
                        <li>今天06月28日</li>
                    </ul>
                </div>
                {/* 影院地址导航 */}
                <Nav className="nav">
                    <ul>
                        <li className="theWholeCity">
                            <span onClick={this.handleDisplay.bind(this)}>全城</span>
                            <i></i>
                        </li>
                        <li className="theWholeCity">
                            <span>品牌</span>
                            <i></i>
                        </li>
                        <li>
                            <span>特色</span>
                            <i></i>
                        </li>
                    </ul>
                </Nav>
                <CArea style={{ display: this.state.d }}>
                    <h2>
                        <p>商区</p >
                        <p>地铁站</p >
                    </h2>
                    <div>
                        <div className="ul">
                            <ul>
                                {
                                    this.props.district.subItems ? this.props.district.subItems.map((item) => {
                                        return (
                                            <li key={item.id}>{item.name}({item.count})</li>
                                        )
                                    }) : ""
                                }
                            </ul>
                        </div>
                        <div className="ol">
                            <ol>
                                <li>
                                    <span className="item-name">全部</span>
                                    <span className="item-count">32</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </CArea>
                {/* 影院地址 */}
                <Conent>
                            {
                                this.props.cine?this.props.cine.map((item)=>{
                                    return<div className="detail-con" key={item.id}>
                                    <div className="detail-con1">
                                        <div className="detail-con2"><span>{item.nm}</span><span>{item.sellPrice}</span><span>元起</span></div>
                                        <div className="detail-con3">
                                            <span>{item.addr}</span>
                                            <span>{item.distance}</span>
                                        </div>
                                        <div className="detail-con4">
                                            <div>退</div>
                                            <div>改签</div>
                                            <div>小吃</div>
                                            <div>{item.tag.vipTag}</div>
                                        </div>
                                        <div className="detail-con5">
                                            <span className="iconfont">&#xe611;</span>
                                            <div>{item.promotion.cardPromotionTag}</div>
                                        </div>
                                    </div>
                                    <div className="detail-con6">
                                        <span>近期场次：</span>
                                        <span>11:05</span>
                                        <span> 11:20 </span>
                                        <span> 11:50</span>
                                    </div>
                                </div>
                                }):""
                            }
                        
                    
                </Conent>
            </Div>
        );
    }
}


var mapState = (state) => {
    return {
        detailMovie:localStorage.detailMovie ? JSON.parse(localStorage.detailMovie) : state.film.detailMovie,
        cinemas: localStorage.cinemas ? JSON.parse(localStorage.cinemas) : state.cinema.cinemas,
        district: localStorage.district ? JSON.parse(localStorage.district) : state.cinema.district,
        cine:state.film.cine.cinemas,
    }
}
var mapActions = (dispatch) => {
    return {
        handleDis() {
            dispatch(action.handleDisplay())
        },
        handleCinList(){
            dispatch(action.handleCine())
        }
    }
}
export default connect(mapState, mapActions)(Fpage);


const Div = styled.div`
// 头部
    .detail-header{
        display:flex;
        height: .98rem;
        background: red;
        align-items: center;
        padding: 0 .3rem;
        color:#fff;
        a .iconfont{
            font-size:.46rem;
            color:#fff;
        }
        .detail{
            flex:1;
            text-align:center;
            font-weight:400;
            font-size:.36rem;
        }
    }
    // 电影介绍
    .detail-list{
        position: relative;
        cursor: pointer;
        height:4.41rem;
        .detail-ti{
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            background-color: #333;
        }
        .detail-bg{
            background-image: url(//p0.meituan.net/71.100/moviemachine/5dac476535359b7bb951ff15d37a9d0b153821.jpg);
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
            position: absolute;
            -webkit-filter: blur(1.2rem);
            filter: blur(1.2rem);
            background-size: cover;
            background-repeat: no-repeat;
            opacity: .55;
        }
        .detail-content{
            height: 3.75rem;
            padding: 0.3rem .5rem .35rem .3rem;
            display: flex;
            .detail-img{
                width: 2.58rem;
                height: 3.52rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .detail-cont{
                margin-left: .3rem;
                line-height: 1;
                color: #fff;
                overflow-x: hidden;
                div:nth-of-type(1){
                    font-size: .4rem;
                    margin-top: .1rem;
                    font-weight: 700;
                    overflow: hidden;
                    width: 80%;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                div:nth-of-type(2){
                    width: 90%;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    margin-top: .3rem;
                    font-size: .24rem;
                    color: #fff;
                    opacity: .8;
                }
                div:nth-of-type(3){
                    font-size: .4rem;
                    font-weight: 700;
                    color: #fc0;
                    margin-top: .3rem;
                    span{
                        font-size: .3rem;
                        color: #fff;
                        opacity: .8;
                        margin-left:.2rem;
                    }
                }
                div:nth-of-type(4){
                    margin-top: .3rem;
                    font-size: .3rem;
                    color: #fff;
                    opacity: .8;
                }
                div:nth-of-type(5){
                    margin-top: .3rem;
                    font-size: .3rem;
                    color: #fff;
                    opacity: .8;
                }
                div:nth-of-type(6){
                    margin-top: .2rem;
                    font-size: .3rem;
                    color: #fff;
                    opacity: .8;
                }
            }
            
        }
        .detail-ico{
            position:absolute;
            right: .3rem;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            .iconfont{
                color:#ccc;
                font-size:.6rem;
            }
        }
    }
    // 时间导航
    .detail-time{
        width:100%;
        background:#fff;
        overflow:hidden;
        ul{
            display: -webkit-box;
            height: 1.05rem;
            li{
                width:2.7rem;
                line-height:1.05rem;
                text-align: center;
                margin-left: .1rem;
            }
        }
    }
`
const CArea = styled.div`
        width: 100%;
        height: 8rem;
        position: absolute;
        // top:2.64rem;
        z-index:10;
        background: #fff;
        h2{
            height: .8rem;
            display: flex;
            justify-content: left;
            align-items: center;
            background: #fff;
            p{
                width: 45%;
                text-align: center; 
                line-height:.8rem;
                background: #fff;
            }
        }
        div{
        width:96%;
        height:100%;
        display: flex;
        background: #fff;
            .ul{
                overflow: :scroll;
                width: 2rem;
                // border: 1px solid black;
                background:#f5f5f5;
            ul{
                width: 2rem;
                overflow:hidden;
            li{
                height: .88rem;
                padding-left: 10px;
                line-height: .88rem;
                font-size: .28rem;
                /* text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden; */
                padding:0 .3rem 0 .2rem;
                }
            }
 }
    .ol{
        overflow: :scroll;
        width: 70%;
        height: 100%;
        // border: 1px solid black;
        background:#f5f5f5;
        ol{
            width: 100%;
            float: right;
            overflow: scroll;
            
            overflow:hidden;
        li{
            position: relative;
            height: .9rem;
            line-height: .9rem;
            padding: 0 0 0 .9rem;
            span{
                display: inline-block;
            }
            .item-name{
                width: 70%;
                font-size: .24rem;
                color: #333;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
                .item-count{
                    float: right;
                    width:.8rem;
                    margin-right: .4rem;
                    color: #8f9296;
                    font-size:.24rem;
                    text-align: right;
                }
            }
        }
    }
}
`

const Nav = styled.nav`
border-top:1px solid #ccc;
border-bottom:1px solid #ccc;
ul{
    width: 100%;
    height: .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    li{
        width: 33%;
        height: .5rem;
        text-align: center;
        line-height: .5rem;
        position: relative;
        span{
        font-size: .2rem;
        }
        i{
            position: absolute;
            left: 1.5rem;
            top: .25rem;
            border-top: 5px solid #ccc;
            border-left: 5px solid #fff;
            border-bottom: 5px solid #fff;
            border-right: 5px solid #fff;
            }
     }
         .theWholeCity{
              border-right: 2px solid #ccc;
             }
}

`
const Conent=styled.div`
    position:absolute;
    height:100%;
    width: 100%;
    background:#fff;
        .detail-con{
            padding:.3rem .3rem;
            .detail-con1{ 
                display:block;
                color: #000;
                .detail-con2{
                    font-size:.4rem;
                    span:nth-of-type(2){
                        color:red;
                    }
                    span:nth-of-type(3){
                        font-size:.3rem;
                        color:red;
                    }
                }
                .detail-con3{
                    margin-top:.1rem;
                    font-size:.3rem;
                    display: flex;
                    span:nth-of-type(1){
                        width: 80%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        display: block;
                        margin-right: .2rem;
                    }
                }
                .detail-con4{
                    display:flex;
                    color: #589daf;
                    // margin-top:.2rem;
                    div:nth-of-type(1){
                        border: 1px solid #589daf;
                        margin-right:.2rem;
                        border-radius: .05rem;
                    }
                    div:nth-of-type(2){
                        border: 1px solid #589daf;
                        margin-right:.2rem;
                        border-radius: .05rem;
                    }
                    div:nth-of-type(3){
                        border: 1px solid #f90;
                        margin-right:.2rem;
                        border-radius: .05rem;
                        color:#f90;
                    }
                    div:nth-of-type(4){
                        border: 1px solid #f90;
                        margin-right:.2rem;
                        border-radius: .05rem;
                        color:#f90;
                    }
                }
                .detail-con5{
                    display:flex;
                    margin-top:.1rem;
                    color:#999;
                    span:nth-of-type(1){
                        color:blue;
                        margin-right:.1rem;
                    }
                }
            }
            .detail-con6{
                color:#999;
                margin-top:.15rem;
                span:nth-of-type(2){
                    padding: 0 .1rem;
                    border-right:1px solid #e1e1e1;
                    text-align:center;
                }
                span:nth-of-type(3){
                    padding: 0 .1rem;
                    border-right:1px solid #e1e1e1;
                    text-align:center;
                }
                span{
                    padding: 0 .1rem;
                }
            }
        }

`