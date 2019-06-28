import React, { Component } from 'react';
import styled from 'styled-components';

import { Route, Switch, NavLink} from "react-router-dom";
import Hot from './hotshowing/hotshowing';
import Show from './show/show';

class Film extends Component {
    
    render() {
        return (
            <Div>
                <div className="header">猫眼电影</div>
                <div className="header-b">
                    <div className="header-l"><NavLink to="/city">北京<span className="iconfont">&#xe76f;</span></NavLink></div>
                    <div className="header-c"><NavLink to="/film/hot" >正在热映</NavLink>
                        <NavLink to="/film/show" >即将上映</NavLink>
                        </div>
                    <div className="header-r"><NavLink to="/search"><span className="iconfont">&#xe66a;</span></NavLink></div>
                </div>
                <Switch>
                        <Route path="/film/hot" component={Hot} />
                        <Route path="/film/show" component={Show} />
                        </Switch>
            </Div>
        );
    }
}



export default Film;




const Div = styled.div`
        .header{
            width:100%;
            height:.98rem;
            background:red;
            text-align:center;
            font-size: .4rem;
            font-weight: 400;
            color:#fff;
            line-height:.98rem;
            position: fixed;
            top: 0;
            z-index: 100;
        }
        .header-b{
            border-bottom: 1px solid #e6e6e6;
            height: .88rem;
            display:flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: .98rem;
            width: 100%;
            background: #fff;
            z-index:100;
            .header-l{
               padding:0 .2rem;
               ont-size: .3rem;
               color: #666;
               display:flex;
               align-items:center;
            }
        }
        .header-c{
            display:flex;
            text-align: center;
            flex: 1;
            justify-content: space-evenly;
            font-size:.3rem;
            line-height:.88rem;
        }
        .active{
            color:red;
            border-bottom:2px solid red;
        }
        .header-r{
            padding:0 .3rem;
            font-size:.4rem;
            color:red;
            font-weight:700;
        }
`