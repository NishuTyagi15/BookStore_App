import React from 'react';
import Books from './Books';
import './BooksDisplay.scss';


const BooksDisplay = (props) => { 
    const bookList = props.bookarr.map((info) => <Books info={info} booksDisplay ={props.booksDisplay}/>);
    return (
        <div>
            <div className="book_header">
                <h2 className="book_name">Books</h2>
                <p className="header_txt">(128 items)</p>
            </div>
            <div className="bookdisplay_main">{bookList}</div>
        </div>
    );
};
export default BooksDisplay;