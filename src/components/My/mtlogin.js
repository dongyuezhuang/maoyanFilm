import React, { Component } from 'react';
import styled from "styled-components";
class Mtlogin extends Component {
    render() {
        return (
            <Div>
                <h4>
                    <input type="text" placeholder="账户名/手机号/Email"/>
                    <input type="text" placeholder="请输入您的密码"/>
                </h4>
                <button>登录</button>
            </Div>
        );
    }
}

export default Mtlogin;


const Div=styled.div`
h4{
    width: 95%;
    height: 1.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    input{
        width:100%;
        height: .6rem;
    }
}
button{
    width:100%;
        height: .6rem;
}
`