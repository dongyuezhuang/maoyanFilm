import React, { Component } from 'react';
import action from "../../store/actions/Cinema/action.js";
import { connect } from "react-redux";
import styled from 'styled-components';
class Cinema extends Component {
    constructor(props){
        super(props)
        this.state={
            flag:true,
            d:"block",
        }
    }
    componentDidMount(){
        this.props.handleDisplay()
    }
    handleDisplay(){  
        this.setState({
            flag:!this.state.flag,
            d:this.state.d==="none"?this.state.d="block":this.state.d="none"
        })
    }
    handleGoDetailsPage(id){
        this.props.handleGoDetailsPage(id)
        this.props.history.push("/detailspage",{params:{id:id}})
    }
    render() {
        return (
<<<<<<< HEAD
            <Cin>
                <Div>
                    <h2>影院</h2>
                    <h3>
                        <p>
                            <span>北京</span>
                            <i></i>
                        </p>
                        <input type="text" placeholder="搜影院" />
                    </h3>
                    <Ul>
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
                    </Ul>
                  
                </Div>

                <CArea style={{display:this.state.d}}>
                    <h2>
                        <p>商区</p>
                        <p>地铁站</p>
                    </h2>
                    <div>
                        <div className="ul">
                            <ul>
                                {
                                    this.props.district.subItems.map((item)=>{
                                        return (
                                            <li key={item.id}>{item.name}}</li>
                                        )
                                    })
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

                <Main>
                    <div className="item">
                    {
                        this.props.cinemas.map((item)=>{
                            return (
                                <div className="title-block" key={item.id} onClick={this.handleGoDetailsPage.bind(this,item.id)}>
                                    <div className="title">
                                        <span>{item.nm}</span>        
                                        <span className="price-block">
                                            <span className="price">{item.sellPrice}</span>
                                            <span className="q">元起</span>
                                        </span>     
                                    </div>
    
                                    <div className="location-block">
                                        <div className="line-ellipsis">{item.addr}</div>
                                        <div className="distance">{item.distance}</div>
                                    </div>
    
                                    <div className="flex"></div>      
                                    <div className="label-block">
                                        <div className="allowRefund">退</div>
                                        <div className="endorse">改签</div>
                                        <div className="snack">小吃</div>
                                        <div className="vipTag">折扣卡</div>
                                    </div> 
    
                                    <div className="discount-block">
                                        <div>
                                            {item.promotion.cardPromotionTag?<div className="discount-label">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="" />     
                                            </div>:""}
                                            <div className="discount-label-text">{item.promotion.cardPromotionTag}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                        
                    </div>
                </Main>
            </Cin>
=======
            <div>
                
            </div>
>>>>>>> xiao
        );
    }
}

var mapState = (state) => {
    return {
        cinemas:localStorage.cinemas?JSON.parse(localStorage.cinemas):state.cinema.cinemas,
        district:localStorage.district?JSON.parse(localStorage.district):state.cinema.district
    }
}
var mapDispatch = (dispatch) => {
    return {
        handleDisplay() {
            dispatch(action.handleDisplay())
        },
        handleGoDetailsPage(id){
            dispatch(action.handleGoDetailsPage(id))
        }
    }
}
export default connect(mapState, mapDispatch)(Cinema);



// --------------------------------------------css样式
const Cin = styled.div`
width: 100%;
height:100%;
`
const Div = styled.div`
width: 100%;
height:2.64rem;
position: fixed;
z-index:100;
h2{
    width: 100%;
    height: .96rem;
    border: 1px solid black;
    background: #df2d2d;
    color: #fff;
    text-align: center;
    line-height:.96rem;
}
h3{
    width: 100%;
    height: .8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ccc;
    p{
        width: 1.3rem;
        height: .8rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            font-size: .2rem;
        }
        i{
            position: absolute;
            left: .9rem;
            top: .35rem;
            border-top: 5px solid #fff;
            border-left: 5px solid #ccc;
            border-bottom: 5px solid #ccc;
            border-right:  5px solid #ccc;
        }
    }
    input{
        width: 5.4rem;
        height: .5rem;
        border:0;
        text-align: center;
        border-radius: .1rem;
        background: #fff;
    }
}
`
const Ul = styled.ul`
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
        border-right:  5px solid #fff;
    }
}
.theWholeCity{
    border-right:  2px solid #ccc;
}
`
const CArea = styled.div`
width: 100%;
height: 8rem;
position: fixed;
top:2.64rem;
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
        border: 1px solid black;
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
        border: 1px solid black;
        ol{
            width: 100%;
            float: right;
            overflow: scroll;
            background: #ccc;
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
const Main = styled.div`
width: 100%;
height: 100%;
position: absolute;
left: 0;
top: 2.64rem;
.item {
    padding: 0rem .3rem 0rem .3rem;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    .title-block {
        display: block;
        border-bottom:1px solid black;
        padding: .3rem 0rem .3rem 0rem
        .title {
            height: .46rem;
            line-height: .46rem;
            font-size: .32rem;
            color: #000;
        }
        .price-block {
            padding-top: .18rem;
            padding-left: .06rem;
            .price {
                font-size: .32rem;
            }
            .q {
                margin-left: .06rem;
            }
        }
        .location-block {
            margin-top: .12rem;
            font-size: .26rem;
            color: #666;
            display: flex;
            .line-ellipsis {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                -webkit-box-flex: 1;
                flex: 1;
            }
            .distance {
                margin-left: .1rem;
            }
        }
        .label-block {
            height: .34rem;
            line-height:.34rem;
            margin-top: .08rem;
            margin-bottom: .08rem;
            display:flex;
            .allowRefund{
                color: #589daf;
                border: 1px solid #589daf;
                margin-right: .12rem;
            }
            .endorse{
                display:block;
                color: #589daf;
                border: 1px solid #589daf;
                margin-right: .12rem;
            }
            .snack{
                color: #f90;
                border: 1px solid #f90;
                margin-right: .12rem;
            }
            .vipTag {
                color: #f90;
                border: 1px solid #f90;
                margin-right: .12rem;
            }
        }
        .discount-block {
            color: #999;
            margin-bottom: .08rem;
            div{
                display:flex;
                .discount-label {
                    width: .3rem;
                    height: .28rem;
                    position: relative;
                    top: 3px;
                    img {
                        width: 100%;
                        display: block;
                        border: 0;
                    }
                }
                .discount-label-text {
                    margin-left: 0;
                    font-size: 11px;
                }
            }
            
        }
    }
}
`