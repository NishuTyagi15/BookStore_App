import React, { Component } from 'react'
import './Wishlist.scss';
import { Redirect } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Button from '@material-ui/core/Button';
import Book from '../../Assets/book.png';
import DeleteForever from '@material-ui/icons/DeleteForever';
import UserServices from '../../Services/UserService';

const obj = new UserServices();

export default class WishList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }

    }

    componentDidMount() {
        this.getWishlistItem();
        this.getCartItem();
    }

    getWishlistItem = () => {
        obj.getWishlist().then((response) => {
            console.log(response.data.result);
            this.setState({ books: response.data.result });
        }).catch(error => {
            console.log(error);
        })

    }

    getCartItem = () => {
        obj.getCartItem().then((response) => {
            console.log(response.data.result);
            this.setState({ books: response.data.result });
        }).catch(error => {
            console.log(error);
        })

    }

    moveToCart = (value) => {
        let Data = {
            isCart: true
        }
        console.log(value)
        obj.addToCart(value, Data).then((response) => {
            console.log(response);
            this.getCartItem();
            this.deleteWish(value);
        }).catch(error => {
            console.log("error", error);
        })
    }

    deleteWish(e) {
        console.log("id ", e);
        obj.deleteWishlistItem(e).then((data) => {
            console.log(data);
            this.getWishlistItem();
        }).catch(error => {
            console.log("error", error);
        })
    }


    render() {
        console.log(this.state.books.length)
        return (
            <div>
                <Header val={this.state.books.length} />
                <div className="wish_frame">
                    <div className="wish_content">
                        <div className="wishlist_heading">My Whislist({this.state.books.length}) </div>

                        {this.state.books.map((value, index) =>
                            <div className="main_cart">
                                <div>
                                    <img className="img_book" src={Book} alt="" />
                                </div>
                                <div className="text_content">
                                    <div className="bag_text">
                                        <div className="cart_title">{value.product_id.bookName}</div>
                                        <div className="cart_bookAuthor">by {value.product_id.author}</div>
                                        <div className="price">Rs.{value.product_id.price}</div>
                                    </div>
                                    <div className="delete_Button">
                                        <div className="delelte_content">
                                            <div 
                                                className="del_icon" 
                                                onClick={() => this.deleteWish(value.product_id._id)}
                                            >
                                                <DeleteForever />
                                            </div>
                                        </div>
                                        <div className="btn_content1">
                                            <Button variant="contained" className="btn_place1" onClick={() => this.moveToCart(value.product_id._id)} >
                                                Move to cart
                                            </Button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )}
                    </div  >
                </div>
                <Footer/>
            </div>
        )
    }
}