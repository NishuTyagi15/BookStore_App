import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuBookTwoTone from '@material-ui/icons/MenuBookTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import './Header.scss';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <AppBar className="header_main" position="fixed">
                    <Toolbar>
                        <div className="header_title">
                            <MenuBookTwoTone />
                            <div className="text">Bookstore</div>
                        </div>
                        <div className="search">
                            <div className="searchIcon">
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                className="input"
                            />
                        </div>
                        <div className="side-header">
                            <div className="cart_main">
                                <span className="cart">Cart</span>
                                <Badge badgeContent={1} 
                                    color="primary"
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}>
                                    <ShoppingCartOutlined />
                                </Badge>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </>
        );

    }
}

export default Header;