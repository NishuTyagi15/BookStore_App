import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Books from '../BooksDisplay/Books';
import { Pagination } from '@mui/material';
import '../BooksDisplay/BooksDisplay.scss'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Stack from '@mui/material/Stack';
import UserServices from '../../Services/UserService';

const obj = new UserServices();


export default function Home(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [bookarr, setBooks] = React.useState([]);
    const [cart, setCart] = React.useState([]);
    const [perPage, setPerPage] = React.useState("8");
    const [currentPage, setCurrentPage] = React.useState("1");
    const [search, setSearchBook] = React.useState("");
    const [searchData, setSearchData] = React.useState([]);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        booksDisplay();
        getCartItem();
    },[],search);


    const booksDisplay = () => {
        obj.getAllbooks().then((response) => {
            setBooks(response.data.result );
        }).catch((error) => {
            console.log(error);
        });
    }

    const getCartItem = () => {
        obj.getCartItem().then((response) => {
            console.log(response.data.result);
            setCart(response.data.result);
        }).catch(error => {
            console.log(error);
        })
    }

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

    const AtoZ = () => {
        let sortData = bookarr.sort((x, y) => (x.bookName > y.bookName && 1) || -1);
        console.log(sortData);
        setBooks(sortData);
        handleClose();
    };

    const handlePagination = (e, newPages) => {
        // setPerPage(e.target.value);
        setCurrentPage(newPages);
    }

    const searchBooks = (e) => {
        setSearchBook(e.target.value);
        console.log(e.target.value);
        let filterBooks = bookarr.filter((val) => {
            console.log(val);
            return val.author.includes(e.target.value)
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

    const booksDetails = (book) => {
        return (<Books value={book} get={booksDisplay} getCard={getCartItem} />)
    }

    const LBook = currentPage * perPage;
    const FBook = LBook - perPage;
    const currentBooks = bookarr.slice(FBook, LBook);

    return (
        <>
            <Header book={bookarr} val={cart.length} search={searchBooks} />
                <div>
                    <div className="book_header">
                        <h2 className="book_name">Books</h2>
                        <p className="header_txt">(
                            {search === "" ? (
                                currentBooks.length
                            ) : (
                                searchData.length
                            )})
                        </p>
                    </div>
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
                            <ExpandMore />
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
                            <MenuItem value="asec" onClick={ascending}>Price : Low to High</MenuItem>
                            <MenuItem value="dsec" onClick={descending}>Price : High to Low</MenuItem>
                            <MenuItem value="new_arri" onClick={AtoZ}>Sort By: (A-Z)</MenuItem>
                        </Menu>
                    </div>
                    <div className="bookdisplay_main">
                        {search === "" ? (
                            currentBooks.map(booksDetails)
                        ) : (
                            searchData.map(booksDetails)
                        )}
                    </div>
                    <div className="pagination">
                        <Stack spacing={2}>
                            <Pagination
                                count={Math.floor(bookarr.length / perPage + 1)}
                                shape="rounded"
                                onChange={handlePagination}
                            />
                        </Stack>
                    </div>
                </div>
            <Footer />
        </>
    );
}