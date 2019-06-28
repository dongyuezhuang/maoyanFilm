import React, { Component } from 'react';
import styled from 'styled-components'
import action from "../../../store/reducer/Film/action"
import {connect} from "react-redux"
class Hot extends Component {
    constructor(props){
        super(props)
 
    }
    componentDidMount(){
        this.props.handelAdd();
        // this.props.handelGo();
    }
    handelPush(id){
        this.props.history.push("/fpage");
        this.props.handelGo(id);
    }
    render() {
        return (
            <Div>
                <div className="hot-box">
                    <ul>
                    {
                            this.props.list?this.props.list.map((item)=>{
                                return<li key={item.id} onClick={this.handelPush.bind(this,item.id)}>
                                <div className="hot-img"><img src={item.img.slice(5,22)+148+"."+208+item.img.slice(25)} /></div>
                                <div className="hot-cont">
                                    <div className='hot-cont-l'>
                                        <div className="cont-left-t"><span>{item.nm}</span><span>3DiMAX</span></div>
                                        <div className="cont-left-b">
                                            <div>观众评分<span>{item.sc}</span></div>
                                            <div><span>{item.star}</span></div>
                                            <div>{item.showInfo}</div>
                                        </div>
                                    </div>
                                    <div className='hot-cont-r'><span>购票</span></div>
                                </div>
                            </li>
                            }):''
                        }
                    </ul>
                </div>
            </Div>
        );
    }
}
var mapState=(state)=>{
    console.log(state.film.list.movieList)
        return{
            list:state.film.list.movieList,
        }
}
var mapActions = (dispatch)=>{
    return{
        handelAdd(){
            dispatch(action.getData())
        },
        handelGo(id){
            dispatch(action.getGo(id))
        }
    }
}
export default connect(mapState,mapActions)(Hot);

const Div = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: #f5f5f5;
        top: 1.86rem;
        margin-bottom:1rem;
        .hot-box{
            background-color: #fff
            ul{
                padding: .1rem .4rem .1rem .1rem;
                li{
                    display:-webkit-box;
                    justify-content: space-evenly;
                    align-items: center;
                    
                    .hot-img{
                        width: 1.4rem;
                        height:100%
                        margin-left:.2rem;
                        img{
                            width: 1.4rem;
                            height: 100%;
                            display: block;                           
                        }
                    }
                    .hot-cont{
                        justify-content:space-between;
                        display:flex;
                        width: 80%;
                        border-bottom: 1px solid #e6e6e6;
                        padding: .2rem 0 .2rem .1rem;
                        .hot-cont-l{
                            padding:.1rem .2rem;
                            width:70%;
                            .cont-left-t{
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
                            .cont-left-b{
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
                        .hot-cont-r{
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