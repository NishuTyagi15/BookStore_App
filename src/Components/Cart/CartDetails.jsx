import React from 'react';
import user_services from "../../Services/user_services";
import Book from '../../Assets/book.png';

const CartDetails = (props) => {
    return(
        <>
            {props.val.map((value, index) =>
                <div className="main_cart">
                    <div>
                        <img className="img_book" src={Book} alt="" />
                    </div>
                    <div className="text_content">
                        <div className="bag_text">
                            <div className="cart_title">{val.product_id.bookName}</div>
                            <div className="cart_bookAuthor">by {val.product_id.author}</div>
                            <div className="price">Rs. {val.product_id.price}</div>
                        </div>
                        <div className="count_content">
                            <div className="minus">-</div>
                            <div className="count">1</div>
                            <div className="plus">+</div>
                            <div className="remove">Remove</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CartDetails;
