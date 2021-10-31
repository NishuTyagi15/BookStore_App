import React, { useEffect } from 'react';
import './Header.scss';
import education from '../../Assets/education.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";

function Header(props) {
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const [searchData, setSearchData] = React.useState([]);

    useEffect(() => {
        console.log("book data", props.book)
    }, []);

    const searchBooks = (e) => {
        props.search(e)
    }

    return (
        <>
            <AppBar className="header_main" position="fixed">
                <Toolbar>
                    <div className="header_title">
                        <img src={education} alt="Book"></img>
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
                        <div className="cart_main">
                            <span className="cart">Cart</span>
                            <Badge badgeContent={2}
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
