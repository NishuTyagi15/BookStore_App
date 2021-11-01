import React, { useState, useEffect } from 'react';
import Books from './Books';
import './BooksDisplay.scss';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Typography} from '@material-ui/core';
import UserServices from '../../Services/UserService';

const obj = new UserServices();

const BooksDisplay = (props) => { 

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [bookarr, setBooks] = React.useState([]);
    const [search, setSearchBook] = React.useState("");
    const [searchData, setSearchData] = React.useState([]);
    const [page, setPage] = useState(1);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const ascending = () => {
        let sortData = bookarr.sort((x, y) => (x.price > y.price && 1) || -1);
        console.log(sortData);
        setBooks(sortData);
        handleClose();
    };

    const descending = () => {
        let sortData = bookarr.sort((x, y) => (x.price < y.price && 1) || -1);
        console.log(sortData);
        setBooks(sortData);
        handleClose();
    };

    const newArrivals = () => {
        let sortData = bookarr.sort((x, y) => (x.bookName > y.bookName && 1) || -1);
        console.log(sortData);
        setBooks(sortData);
        handleClose();
    };

    useEffect(() =>{
        booksDisplay();
    },[]);    

    const booksDisplay = () => {
        obj.getAllbooks().then((response) => {
            setBooks(response.data.result );
        }).catch((error) => {
            console.log(error);
        });
    }

    const bookList = bookarr.map((index) => <Books index={index} booksDisplay ={booksDisplay}/>);

    const searchBooks = (e) => {
        setSearchBook(e.target.value);
        console.log(e.target.value);
        let filterBooks = bookarr;
        filterBooks = bookarr.filter((val) => {

            console.log(val);
            return val.author.toLowerCase().includes(e.target.value)
                || val.bookName.toLowerCase().includes(e.target.value)
                || val.description.toUpperCase().includes(e.target.value)
                || val.author.toUpperCase().includes(e.target.value)
                || val.bookName.toUpperCase().includes(e.target.value)
                || val.author.includes(e.target.value)
                || val.bookName.includes(e.target.value)
        })
        if (e.target.value === "") {
            setSearchData(filterBooks);
            console.log(setSearchData(filterBooks))
        }
        else {
            setSearchData(props.bookarr)
            console.log(setSearchData(filterBooks))
        }
    }

    return (
        <div>
            <div className="sortby">
                <Button
                    className="sort"
                    id="demo-positioned-button"
                    aria-controls="demo-positioned-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Sort by relevance
                    <ExpandMore/>
                </Button>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem value ="asec" onClick={ascending}>Price : Low to High</MenuItem>
                    <MenuItem value="dsec" onClick={descending}>Price : High to Low</MenuItem>
                    <MenuItem value="new_arri" onClick={newArrivals}>Newest Arrivals</MenuItem>
                </Menu>
            </div>
            <div className="book_header">
                <h2 className="book_name">Books</h2>
                <p className="header_txt">({bookarr.length})</p>
            </div>

            <div className="bookdisplay_main">{bookList}</div>
            <div className="pagination">
                <Stack spacing={2}>
                    <Typography>{page}</Typography>
                    <Pagination 
                        count={18} 
                        shape="rounded" 
                        defaultPage={page}
                        onChange={(event, value) => setPage(value)}
                    />
                </Stack>
            </div>
        </div>
    );
};
export default BooksDisplay;