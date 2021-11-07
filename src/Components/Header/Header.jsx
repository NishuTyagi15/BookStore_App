import React from 'react'
import './Header.scss';
import education from '../../Assets/education.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Popper from '@material-ui/core/Popper';
import { color } from '@mui/system';

function Header(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleProfile = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const searchBooks = (e) => {
        props.search(e)
    }

    return (
        <>
            <AppBar className="header_main" position="fixed">
                <Toolbar>
                    <div className="header_title">
                        <Link to="/home" style={{textDecoration:'none'}}>
                            <img src={education} alt="Book"></img>
                        </Link>
                        <div className="text">Bookstore</div>
                    </div>
                    <div className="search">
                        <div className="searchIcon">
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            className="input"
                            onChange={e => searchBooks(e)}
                        />
                    </div>
                    <div className="side_header">
                        <div className="profile">
                            <div className="profile_icon"> <PersonOutlineIcon onClick={handleProfile} /></div>
                            <span className="profile_text">{localStorage.getItem('firstname')}</span>
                            <Popper className="pop" open={open} anchorEl={anchorEl} placement={'bottom-start'} transition>
                                <div className="paper">
                                    <div className="popContent name">Hello {localStorage.getItem('firstname')}</div>
                                    <Link to="/wishlist" style={{textDecoration:'none', color:'#000'}}>
                                        <div className="popContent">
                                            &#x2661; WishList
                                        </div>
                                    </Link>
                                    <div className="logout">
                                        <Link to="/dashboard" style={{textDecoration:'none'}}>
                                            <div className="popContent">
                                                <button className="logout_btn">Logout</button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </Popper>
                        </div>
                        <div className="cart_main">
                            <span className="cart">Cart</span>
                            <Badge badgeContent={props.val}
                                className="badge"
                                color="primary"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <Link style={{ textDecoration: 'none', color: 'white' }} to={'/cart'}>
                                    <ShoppingCartOutlined />
                                </Link>
                            </Badge>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
