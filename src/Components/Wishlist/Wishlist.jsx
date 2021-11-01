import React, { Component } from 'react'
import './Wishlist.scss';
import { Link } from "react-router-dom";
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
        this.getCartItems();
    }

    getWishlistItem = () => {
        obj.getWishlist().then((response) => {
            console.log(response.data.result);
            this.setState({ books: response.data.result });
        }).catch(error => {
            console.log(error);
        })

    }

    getCartItems = () => {
        obj.getCartItem().then((response) => {
            console.log(response.data.result);
            this.setState({ books: response.data.result });
            window.location.reload();
        }).catch(error => {
            console.log(error);
        })

    }

    moveToCart = (value) => {
        let wish = {
            isCart: true
        }
        console.log(value)
        obj.addToCart(value, wish).then((response) => {
            console.log(response);
            this.getCartItems();
            this.deleteWish(value);
        }).catch(error => {
            console.log(error);
        })
    }

    deleteWish(id) {
        console.log(typeof(id));
        obj.removeWishItem(id).then((response) => {
            console.log(response);
            this.getWishlistItem();
        }).catch(error => {
            console.log(error);
        })
    }


    render() {
        console.log(this.state.books.length)

        const wishDetails = this.state.books.map((value, index) => {
            return (
                <div className="main_cart1">
                    <div>
                        <img className="img_book1" src={Book} alt="" />
                    </div>
                    <div className="text_content1">
                        <div className="bag_text1">
                            <div className="cart_title1">{value.product_id.bookName}</div>
                            <div className="cart_bookAuthor1">by {value.product_id.author}</div>
                            <div className="price1">Rs.{value.product_id.price}</div>
                        </div>
                        <div className="delete_Button">
                            <div className="delete_content">
                                <div
                                    className="del_icon"
                                    onClick={() => this.deleteWish(value.product_id._id)}
                                >
                                    <DeleteForever />
                                </div>
                            </div>
                            <div className="btn_content4">
                                <Link to="/cart" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" className="btn_place4" onClick={() => this.moveToCart(value.product_id._id)} >
                                        Move to cart
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <Header val={this.state.books.length} />
                <div className="wish_frame">
                    <div className="wish_content">
                        <div className="wishlist_heading">My Whislist({this.state.books.length}) </div>
                        <div className="cart_details">{wishDetails}</div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}