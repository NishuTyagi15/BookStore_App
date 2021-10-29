import React from 'react';
import './BooksDisplay.scss'
import Book_Img from '../../Assets/book.png'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const Books = (props) => {

    return (
        <div>
            <Card className="books_main">
                <CardContent className="book_img">
                    <img className="image" src={Book_Img} alt="" />
                </CardContent>
                <CardActions className="card_text">
                    <div className="book_title">{props.index.bookName}</div>
                    <div className="author">by {props.index.author}</div>
                    <div className="price">Rs.{props.index.price}</div>
                </CardActions>
                <div className="book_buttons">
                    <div className="add">
                        <Button className="btn1" variant="contained" color="red">
                            Add To Bag
                        </Button>
                    </div>
                    <div className="wish">
                        <Button className="btn2" variant="contained" color="red">
                            Wishlist
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Books;