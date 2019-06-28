import React, { Component } from 'react';
import styled from "styled-components";
import Mtlogin from "./mtlogin.js";
import Phonelogin from "./phonelogin.js";
import {NavLink,Route,Switch} from "react-router-dom";
class My extends Component {
    render() {
        return (
            <Div>
                <h2>
                    <i>&lt;</i>
                    <p>猫眼电影</p>
                </h2>

                <div className="main">
                    <h3>
                        <NavLink to="/my/mtlogin">美团账号登录</NavLink>
                        <NavLink to="/my/phonelogin">手机验证登录</NavLink>
                    </h3>
                    <Switch>
                        <Route path='/my/mtlogin' component={Mtlogin}/>
                        <Route path='/my/phonelogin' component={Phonelogin}/>
                    </Switch>
                </div>
                <div className="bottom">
                    <h6>
                        <span>立即注册</span>
                        <span>找回密码</span>
                    </h6>
                    <p>
                        <span>© 猫眼电影 客服电话：</span>
                        <a href="https://i.meituan.com/account/tel:4006705335">400-670-5335</a>
                    </p>
                </div>
            </Div>
        );
    }
}

export default My;







const Div=styled.div`
width: 100%;
height: 100%;
h2{
    width: 100%;
    height: 1rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #df2d2d;
    i{
        display: block;
        width: .6rem;
        height: 1rem;
        font-style: normal;
        font-size: .7rem;
        color: #fff;
        text-align: center;
        line-height: 1rem;
        position: absolute;
        left: 0;
        top: 0;
    }
    p{
        width: 3rem;
        height: 1rem;
        font-size: .3rem;
        color: #fff;
        text-align: center;
        line-height: 1rem;
    }
}
.main{
    width: 100%;
    height: 100%;
    h3{
        width: 95%;
        height: .8rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        background: #fff;
        a{
            display:block;
            width: 50%;
            height: .7rem;
            font-size: .3rem;
            text-align: center;
            line-height: .7rem;
            color:black;
        }
    }
}
.bottom{
    width:95%;
    height: .8rem;
    margin: 0 auto;
    h6{
        width:100%;
        height: .4rem;
        display: flex;
        justify-content: space-between;
        span{
            line-height:.4rem;
            color:#df2d2d;
            font-size: .2rem;
            
        }
    }
    p{
        width:100%;
        height: .4rem;
        text-align: center;
        line-height: .4rem;
        font-size: .2rem;
        a{
            color:#df2d2d;
        }
    }
}
`