import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import Image from '../../Assets/img1.png';
import '../Dashboard/Dashboard.scss';
import Signup from '../SignUp/Signup';
import Login from '../Login/Login';

export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            open: true,
            opensign:false
        }
    }

    login = () => {
        this.setState({
            open: true,
            opensign: false
        })
    }

    signUp = () => {
        this.setState({
            open: false,
            opensign: true
        })
    }
    
    render() {
        return (
            <div className="dash_main">
                <div className="book_main">
                    <div className="img_main">
                    <img alt="" src={Image}></img>
                    <span className="book_title">Online Book Shopping</span>
                    </div>
                </div>
                <div className="main_content">
                    <div className="title">
                        <Link className="link" style={{color:this.state.open ? 'black' : 'grey'}} to={`/dashboard`} >
                            <span style={{color:this.state.open?'black':'grey', textDecoration:this.state.open?'underline': 'none', textDecorationColor:this.state.open?'maroon':'white'}}
                                onClick={this.login} className="btn active1">LOGIN </span>
                        </Link>
                        <Link className="link" style={{color:this.state.opensign ? 'black' : 'grey'}} to={'/dashboard/signup'} >
                            <span style={{color:this.state.opensign ? 'black' : 'grey', textDecoration:this.state.opensign?'underline': 'none', textDecorationColor:this.state.opensign?'maroon':'white'}} 
                                onClick={this.signUp} className="btn active2">SIGNUP </span>
                        </Link>
                    </div>
                    <div className="box">
                        <Switch>
                            <Route exact path="/dashboard" component={Login} />
                            <Route exact path="/dashboard/signup" component={Signup} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
