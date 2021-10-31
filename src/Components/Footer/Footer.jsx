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
                <div className="footer_title">Copyright &copy; 2020, Bookstore Private Limited. All Rights Reserved</div>
            </div>                  
            </>
        );
    }
}

export default Header;