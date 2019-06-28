import React, { Component } from 'react';
import styled from "styled-components";
class Phonelogin extends Component {
    render() {
        return (
            <Div>
<div className="list">
            <div className="visibale">
                <dd className="kv-line-r dd-padding">
                    <input type="tel"  className="input-weak" placeholder="请输入手机号" maxLength="11" />
                    <button id="smsCode" type="button" className="btn">获取验证码</button>
                </dd>



                <dd className="kv-line-r dd-padding">
                    <input className="input-weak" type="tel" pattern="[0-9]+" placeholder="请输入短信验证码" />
                </dd>
            </div>
</div>



                <div className="btn-wrapper">
                    <button type="submit" className="btn" >登录</button>
                </div>
            </Div>
        );
    }
}

export default Phonelogin;





const Div=styled.div`
    display: block;
    margin-top: 0em;
    .list:first-child {
        margin: 0;
        border-top: 0;
        border-top: 1px solid #d6d6d6;
        border-bottom: 1px solid #d6d6d6;
        margin-top: .2rem;
        margin-bottom: 0;
        background-color: #fff;
        .visibale{
            margin: 0;
            border-bottom: 1px solid #d6d6d6;
            overflow: hidden;
            font-size: inherit;
            font-weight: 400;
            position: relative;
            display: block;
            margin-inline-start: 40px;
            dl {
                margin: 0;
                margin-bottom: -1px;
                padding-left: .2rem;
                border: 0;
                display: block;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                font-size: inherit;
                font-weight: 400;
                .dd-padding{
                    padding-left: 0;
                    padding: .28rem .2rem;
                    .input-weak {
                        width: 100%;
                        display: block;
                        border: 0;
                        height: .6rem;
                        margin: -.15rem 0;
                        text-indent: .1rem;
                        line-height: 1;
                        font-size: .3rem;
                        border-radius: .06rem;
                        padding: 0;
                    }
                    .btn {
                        margin-top: -.15rem;
                        margin-bottom: -.15rem;
                    }
                }
            }
        }
    }
    .btn-wrapper {
        margin: .28rem .2rem;
        .btn:disabled {
            background-color: #dcdcdc;
            color: #999;
            border: 0;
            height: .94rem;
            line-height: .94rem;
            font-size: .4rem;
            display: block;
            width: 100%;
        }
    }
`