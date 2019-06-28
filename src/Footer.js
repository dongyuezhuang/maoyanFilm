import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import Film from "./components/Film/Film.js";
import Cinema from "./components/Cinema/Cinema.js";
import My from "./components/My/My.js";
<<<<<<< HEAD
import Detailspage from "./components/Detailspage/Detailspage.js"
import styled from 'styled-components'
=======
import styled from 'styled-components'
// import City from './components/Film/place/city'
import Fpage from './components/Film/Fpage/fpage'
import Search from "./components/Film/search/search"
>>>>>>> xiao
const Ul = styled.footer`
			width:100%;
			height:.96rem;
			position:fixed;
			bottom:0;
			display: flex;
			justify-content: space-between;
			background: #fff;
<<<<<<< HEAD
			z-index: 100;
=======
			z-index: 10;
			border-top:1px solid #d8d8d8;
>>>>>>> xiao
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
<<<<<<< HEAD
		}
`

=======
`
>>>>>>> xiao
class Footer extends Component {
    render() {
        return (
            <div>
                <Ul className="footer">
<<<<<<< HEAD
                    <NavLink to="/film">
=======
                    <NavLink to="/film/Hot" activeClassName="active">
>>>>>>> xiao
                    <li>
                        <span className="iconfont">&#xe501;</span>
                        <p>电影</p>
                    </li>
                    </NavLink>
<<<<<<< HEAD
                    <NavLink to="/cinema">
=======
                    <NavLink to="/cinema" activeClassName="active">
>>>>>>> xiao
                    <li>
                        <span className="iconfont">&#xe709;</span>
                        <p>影院</p>
                    </li>
                    </NavLink>
<<<<<<< HEAD
                    <NavLink to="/my/mtlogin">
=======
                    <NavLink to="/my" activeClassName="active">
>>>>>>> xiao
                    <li>
                        <span className="iconfont">&#xe563;</span>
                        <p>我的</p>
                    </li> 
                    </NavLink>
                </Ul>
                <Switch>
<<<<<<< HEAD
                    <Route path="/film" component={Film} exact/>
                    <Route path="/cinema" component={Cinema} exact/>
                    <Route path="/my/mtlogin" component={My} exact/>
					<Route path='/my/phonelogin' component={My}/>
					<Route path="/detailspage" component={Detailspage} exact/>
                    <Redirect from="/" to="/film" exact/>  
=======
				{/* <Route path="/city" component={City} /> */}
                    <Route path="/film" component={Film} />
					<Route path="/search" component={Search} />
                    <Route path="/cinema" component={Cinema} />
                    <Route path="/my" component={My} />
					<Route path="/fpage" component={Fpage}></Route>
                    <Redirect from="/" to="/film/Hot" exact/>  
>>>>>>> xiao
                </Switch>
            </div>
        );
    }
}

export default Footer;