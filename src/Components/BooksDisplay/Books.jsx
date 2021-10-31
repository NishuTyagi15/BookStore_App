import React, { Component } from 'react'
import './BooksDisplay.scss'
import Book_Img from '../../Assets/book.png'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import UserServices from '../../Services/UserService';

const obj = new UserServices();

export class Books extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            openadd: false,
            openwish: false,
        }
    }
    

    addToCart = (index) => {
        this.setState({
            openadd: true,
        })
        obj.addToCart(index._id).then((response) => {   
          console.log(response);   
        }).catch(error => {
          console.log(error);
        })
    }

    addToWish = () => {
        this.setState({
            openwish: true,
        })
    }

    render() {
        return (
            <div>
                <Card className="books_main">
                    <CardContent className="book_img">
                        <img className="image" src={Book_Img} alt="" />
                    </CardContent>
                    <CardActions className="card_text">
                        <div className="book_title">{this.props.index.bookName}</div>
                        <div className="author">by {this.props.index.author}</div>
                        <div className="price">Rs.{this.props.index.price}</div>
                    </CardActions>
                    <div className="book_buttons">
                        <div className="add">
                            <Button 
                                className="btn1" 
                                variant="contained" 
                                color="red" 
                                style={{width:this.state.openadd?'17vw':'9vw'}}
                                onClick={() => {this.addToCart(this.props.index) }}>
                                Add To Bag
                            </Button>
                        </div>
                        <div className="wish">
                            <Button 
                                className="btn2" 
                                variant="contained" 
                                color="red" 
                                style={{width:this.state.openwish?'17vw':'7vw', marginLeft:this.state.openwish?'-8.7rem':''}}
                                onClick={() => {this.addToWish(this.props.index) }}>
                                Wishlist
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Books
