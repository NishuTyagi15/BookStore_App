import React from 'react';
import { useState } from "react";
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
                    <div className="book_title">{props.info.bookName}</div>
                    <div className="author">by {props.info.author}</div>
                    <div className="price">Rs.{props.info.price}</div>
                    <div className="book_buttons">
                        <Button className="button2" variant="contained" color="primary">
                            Add To Bag
                        </Button>
                        <Button className="button3" variant="contained" color="red">
                            Wishlist
                        </Button>

                    </div>
                </CardActions>
            </Card>
        </div>
    );
};

export default Books;