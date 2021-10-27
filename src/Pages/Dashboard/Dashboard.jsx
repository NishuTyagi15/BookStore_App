import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import Image from '../Dashboard/img1.png'
import '../Dashboard/Dashboard.scss'
import Signup from '../../Components/SignUp/Signup';
import Login from '../../Components/Login/Login';

export class Dashboard extends Component {
    render() {
        return (
            <div className="dash_main">
                <div className="book_main">
                    <div className="img_main">
                    <img alt="" src={Image}></img>
                    <span style={{ marginTop: '16px' }}>Online Book Shopping</span>
                    </div>
                </div>
                <div className="main_content">
                    <div className="title">
                        <Link style={{textDecoration:"none",color:"black"}} to={`/`} >
                            <span className="btn">LOGIN </span>
                        </Link>
                        <Link style={{textDecoration:"none",color:"black"}} to={`/SignUp`} >
                            <span className="btn">SIGNUP </span>
                        </Link>
                    </div>
                    <div className="box">
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/Signup" component={Signup} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
