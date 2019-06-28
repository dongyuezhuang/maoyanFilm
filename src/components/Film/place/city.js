import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
class City extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: [],
            letters: []
        }
        console.log(this.state.cities)
    }
    componentDidMount() {
        this.getData();
        this.getLetters();
    }
    getData() {
        axios.get("/api/gateway?k=2201240", {
            headers: {
                "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"15605860727722351200601"}`,
                "X-Host": "mall.film-ticket.city.list"
            }
        }).then((res) => {
            console.log(res)
            this.setState({
                cities: res.data.data.cities.sort((a, b) => a.pinyin.charCodeAt(0) - b.pinyin.charCodeAt(0)).map((item) => {
                    return {
                        zm: item.pinyin[0].toUpperCase(),
                        name: item.name
                    }
                })

            })
        })

    }
    getLetters() {
        var letters = [];
        for (var i = 65; i < 91; i++) {
            if (String.fromCharCode(i) === "I" || String.fromCharCode(i) === "O"
                || String.fromCharCode(i) === "V" || String.fromCharCode(i) === "U") {
                continue;
            }
            letters.push(String.fromCharCode(i));
        }
        this.setState({
            letters
        })
    }
    go(zm) {
        var pos = this[zm].offsetTop;
        console.log(pos);
        this.cityul.scrollTop = pos;
        console.log(this.cityul.scrollTop)
    }
    render() {
        return (
            <Div>
            <div className="citys">
            <div className="header">
                <div className="title">
                    <span onClick={this.props.history.go.bind(this, -1)}>×</span>
                    <span>当前城市-</span>
                </div>
                <div className="search">
                    <div className="sear">搜</div>
                    <input type="text" placeholder="请输入城市名或拼音"></input>
                </div>
            </div>
            <div className="content1" ref={(node) => this.cityul = node}>
                <div className="recommend-city">
                    <p>GPS定位你所在的城市</p>
                    <div className="cs">定位失败</div>
                    <p className="hotc">热门城市</p>
                    <div className="cs">北京</div>
                    <div className="cs">上海</div>
                    <div className="cs">广州</div>
                    <div className="cs">深圳</div>
                </div>
                <div className="citylist">
                    <ul className="cityul" >
                        {
                            cities.map((item, index) => {
                                return <li key={item.name}>
                                    {
                                        index === 0 || index !== 0 && item.zm !== cities[index - 1].zm ? <h3 ref={(node) => this[item.zm] = node}>{item.zm}</h3> : ""

                                    }
                                    <span>{item.name}</span></li>

                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="slide">
                <ol>
                    {
                        this.state.letters.map((item) => {
                            return <li key={item} onClick={this.go.bind(this, item)}>{item}</li>
                        })
                    }
                </ol>
            </div>
        </div>
        </Div>
        );
    }
}

export default City;


const Div = styled.div`
.citys{
    width: 100%;
}
.title{
    width: 100%;
    height: 44px;
    line-height: 44px;
    background: #fff;
    font-size:18px;
    text-align: center;
}
.title span:first-child{
    float: left;
    padding-left: 10px;
    font-size: 30px;
}
.title span:last-child{
    text-align: center;
    padding-right: 30px;
}
.search{
    width: 100%;
    height: 49px;
    text-align: center;
    background: #f4f4f4;
}
.search .sear{
    width: 30px;
    height: 32px;
    line-height: 32px;
    margin-top: 9px;
    background: #fff;
    display: inline-block;
    position: absolute;
}
.search input{
    width: 280px;
    height: 30px;
    border: 0;
    border-radius: 0 5px 5px 0;
    margin-top: 9px;
    position: relative;
    margin-left: 30px;
}
.content1{
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: auto;
    right: 0;
    left:0;

    top:95px;
    bottom:0;
}
li{
    list-style: none;
}
.recommend-city{
    width: 100%;
    height: 208px;
    background: #fff;
}
.recommend-city p{
    font-size: 13px;
    color: #797d82;
    margin-bottom: 10px;
    padding: 15px 0 0 15px;
}
.recommend-city .hotc{
    margin-top:0;
}
.cs{
    width: 100px;
    height: 30px;
    background: #f4f4f4;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    margin: 5px 7.5px;
    border-radius: 3px;
    box-sizing: border-box;
}
.citylist{
    background: #fff;

   
}

    
.citylist ul li{
  
    border-bottom: 1px solid #ededed;
    font-size: 14px;
}
.slide{
 
    border: 0;
    position: fixed;
    z-index: 1999;
    width: 17px;
    top:120px;
    right:0;
}
.slide>ol>li{
    font-size: 11px;
    padding: 1px 6px;
    color: #191a1b
}
h3{
    background: #f4f4f4;
    padding-left: 10px;
    font-weight: 200;
    font-size: 14px;
  }
  .cityul>li>span{
      height: 48px;
      line-height: 48px;
      padding-left:20px;
      font-size: 14px;
  }
`