import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import Film from "./components/Film/Film.js";
import Cinema from "./components/Cinema/Cinema.js";
import My from "./components/My/My.js";
import Div from "./css/Footer/footer.js";
class Footer extends Component {
    render() {
        return (
            <Div className="footer">
                <ul>
                    <NavLink to="film" activeClassName="active">
                    <li>
                        <span class="iconfont">&#xe501;</span>
                        <p>电影</p>
                    </li>
                    </NavLink>
                    <NavLink to="cinema" activeClassName="active">
                    <li>
                        <span class="iconfont">&#xe709;</span>
                        <p>影院</p>
                    </li>
                    </NavLink>
                    <NavLink to="my" activeClassName="active">
                    <li>
                        <span class="iconfont">&#xe563;</span>
                        <p>我的</p>
                    </li> 
                    </NavLink>
                </ul>
                <Switch>
                    <Route path="/film" component={Film} exact/>
                    <Route path="/cinema" component={Cinema} exact/>
                    <Route path="/my" component={My} exact/>
                    <Redirect from="/" to="/film" exact/>  
                </Switch>
            </Div>
        );
    }
}

export default Footer;