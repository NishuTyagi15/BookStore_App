import React, { Component } from 'react';
import './Footer.css';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>               
            <div className="footer_main">
                <p className="footer_title">Copyright &copy; 2020, Bookstore Private Limited. All Rights Reserved</p>
            </div>                  
            </>
        );
    }
}

export default Header;