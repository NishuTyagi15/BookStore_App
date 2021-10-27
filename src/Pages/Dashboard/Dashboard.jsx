import React, { Component } from 'react'
import Image from '../Dashboard/img1.png'
import '../Dashboard/Dashboard.scss'

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
                        <span className="btn">LOGIN </span>
                        <span className="btn">SIGNUP </span>
                    </div>
                    <div className="box">
            
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
