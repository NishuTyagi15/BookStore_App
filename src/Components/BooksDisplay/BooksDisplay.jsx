import React from 'react';
import Books from './Books';
import './BooksDisplay.scss';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMore from '@material-ui/icons/ExpandMore';

const BooksDisplay = (props) => { 

    const bookList = props.bookarr.map((info) => <Books info={info} booksDisplay ={props.booksDisplay}/>);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div>
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
                    <MenuItem onClick={handleClose}>Price : Low to High</MenuItem>
                    <MenuItem onClick={handleClose}>Price : High to Low</MenuItem>
                    <MenuItem onClick={handleClose}>Newest Arrivals</MenuItem>
                </Menu>
            </div>
            <div className="book_header">
                <h2 className="book_name">Books</h2>
                <p className="header_txt">(128 items)</p>
            </div>

            <div className="bookdisplay_main">{bookList}</div>
            <div className="pagination">
                <Stack spacing={2}>
                    <Pagination count={18} shape="rounded" />
                </Stack>
            </div>
        </div>
    );
};
export default BooksDisplay;