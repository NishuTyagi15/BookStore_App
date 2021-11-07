import React from 'react'
import './BooksDisplay.scss'
import Book_Img from '../../Assets/book.png'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import UserServices from '../../Services/UserService';

const obj = new UserServices();

function Books(props) {

    const[openadd, setopenadd] = React.useState(false);
    const[openwish, setopenwish] = React.useState(false);

    const addToCart = (value) => {
        setopenadd(true);
        obj.addToCart(value._id).then((response) => {   
          console.log(response);  
          props.getCard();
        }).catch(error => {
          console.log(error);
        })
    }

    const addToWish = (value) => {
        setopenwish(true);
        obj.addToWishList(value._id).then((response) => {
            console.log(response);
            props.getCard();
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <Card className="books_main">
                <CardContent className="book_img">
                    <img className="image" src={Book_Img} alt="" />
                </CardContent>
                <CardActions className="card_text">
                    <div className="book_title">{props.value.bookName}</div>
                    <div className="author">by {props.value.author}</div>
                    <div className="price">Rs.{props.value.price}</div>
                </CardActions>
                <div className="book_buttons">
                    <div className="add">
                        <Button
                            className="btn1"
                            variant="contained"
                            color="red"
                            style={{ width: openadd ? '17vw' : '9vw', backgroundColor: openadd ? '#3371b5' : '#A03037' }}
                            onClick={() => { addToCart(props.value) }}>
                            Add To Bag
                        </Button>
                    </div>
                    <div className="wish">
                        <Button
                            className="btn2"
                            variant="contained"
                            color="red"
                            style={{ width: openwish ? '17vw' : '7vw', marginLeft: openwish ? '-8.7rem' : '', backgroundColor: openwish ? '#3371b5' : 'fff', color: openwish ? '#fff' : '' }}
                            onClick={() => { addToWish(props.value) }}>
                            Wishlist
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Books
