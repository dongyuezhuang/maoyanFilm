import React, { Component } from 'react';
import styled from 'styled-components'
import {NavLink} from "react-router-dom";
class Search extends Component {
    render() {
        return (
            <Div>
                <div className="search-header">
                   <NavLink to="/film/hot"> <span className="iconfont">&#xe602;</span></NavLink>
                    <span className="search">猫眼电影</span>
                </div>
                <div className="search-s">
                    <div className="search-l">
                        <span className="iconfont">&#xe66a;</span>
                        <input type="text" placeholder="搜电影搜影院" />
                    </div>
                    <div className="search-r">取消</div>
                </div>
            </Div>
        );
    }
}

export default Search;

const Div = styled.div`
    background-color: #f5f5f5;
    height:100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    .search-header{
        height:1rem;
        background:red;
        display:flex;
        align-items:center;
        text-align:center;
        a{
            .iconfont{
                font-size:.5rem;
                color:#fff;
            }
        }
        .search{
            flex:1;
            color:#fff;
            font-size:.4rem;
        }
        
    }
    .search-s{
        display:flex;
        justify-content: space-between;
        align-items: center;
        height: .98rem;
        padding: .08rem 0 .08rem .1rem;
        border-bottom: 1px solid #e5e5e5;
        .search-l {
            padding: 0 .1rem;
            border: 1px solid #e6e6e6;
            border-radius: .1rem;
            background-color: #fff;
            -webkit-box-flex: 1;
            flex-grow: 1;
            margin-right: .2rem;
            input{
                -webkit-box-flex: 1;
                flex: 1;
                border: none;
                font-size: 13px;
                color: #333;
                line-height: 20px;
                padding: 4px 0;
                width: calc(100% - 40px);
            }
            .iconfont{
                font-size:.33rem;
            }
        }
        .search-r {
            padding: .3rem .2rem .3rem 0;
            font-size: .4rem;
            color: red;
        }
        
    }
`