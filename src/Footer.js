import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import Film from "./components/Film/Film.js";
import Cinema from "./components/Cinema/Cinema.js";
import My from "./components/My/My.js";
import Detailspage from "./components/Detailspage/Detailspage.js"
import styled from 'styled-components'
const Ul = styled.footer`
			width:100%;
			height:.96rem;
			position:fixed;
			bottom:0;
			display: flex;
			justify-content: space-between;
			background: #fff;
			z-index: 100;
			.active{
				color:red;
			}
			a{
				width: 100%;
				height: 100%;
				li{
					width: 1rem;
					height: .96rem;
					margin: 0 auto;
					span{
						display:block;
						width: 100%;
						height: .48rem;
						font-size: .4rem;
						text-align: center;
    					line-height: .48rem;
					}
					p{
						width: 100%;
						height: .48rem;
						font-size: .3rem;
						text-align: center;
    					line-height: .48rem;
					}
				}
			}
		}
`

class Footer extends Component {
    render() {
        return (
            <div>
                <Ul className="footer">
                    <NavLink to="/film">
                    <li>
                        <span className="iconfont">&#xe501;</span>
                        <p>电影</p>
                    </li>
                    </NavLink>
                    <NavLink to="/cinema">
                    <li>
                        <span className="iconfont">&#xe709;</span>
                        <p>影院</p>
                    </li>
                    </NavLink>
                    <NavLink to="/my/mtlogin">
                    <li>
                        <span className="iconfont">&#xe563;</span>
                        <p>我的</p>
                    </li> 
                    </NavLink>
                </Ul>
                <Switch>
                    <Route path="/film" component={Film} exact/>
                    <Route path="/cinema" component={Cinema} exact/>
                    <Route path="/my/mtlogin" component={My} exact/>
					<Route path='/my/phonelogin' component={My}/>
					<Route path="/detailspage" component={Detailspage} exact/>
                    <Redirect from="/" to="/film" exact/>  
                </Switch>
            </div>
        );
    }
}

export default Footer;