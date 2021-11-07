import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './CartBag.scss';
import Book from '../../Assets/book.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from "react-router-dom";
import UserServices from '../../Services/UserService';

const obj = new UserServices();

export class Cart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            book: [],
            open: false,
            openContent: false, 
            FullName : "",
            Number : "",
            PinCode : "",
            Locality:"",
            Address: "",
            City: "",
            State:"",
            nameError: false,
            numberError:false,
            pinError:false,
            locError:false,
            addError:false,
            cityError:false,
            stateError:false, 
            cartCount: [],        
        }
    }

    decrease = (productid, quantity) => {
        let data = {
            "quantityToBuy": quantity - 1
        }
        if(data.quantityToBuy >= 1){
            obj.cartItemQuantity(data, productid).then((response) => {
                console.log(response);
                this.getCartItem();
            }).catch((error) => {
                console.log(error);
            })
        }
        else{
            console.log("Out of Stock!")
        }      
    }

    increase = (productid, quantity) => {
        let data = {
            "quantityToBuy": quantity + 1
        }
        obj.cartItemQuantity(data, productid).then((response) => {
            this.getCartItem();
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    handleClick1 = () => {
        this.setState({ open: true });
    }

    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.nameError= this.state.FullName !=='' ? false : true;
        errors.numberError= this.state.Number !=='' ? false : true;
        errors.cityError= this.state.City !=='' ? false : true;
        errors.pinError= this.state.PinCode !=='' ? false : true;
        errors.addError= this.state.Address !=='' ? false : true;
        errors.locError= this.state.Locality !=='' ? false : true;
        errors.stateError= this.state.State !=='' ? false : true;
      
        this.setState({
            ...errors
        })

        return isError =errors.nameError || errors.numberError || errors.pinError || errors.addError || errors.locError || errors.stateError || errors.cityError 
    }

    handleClick2 = () => {
        var isValid = this.isValidated();
        let userData = {
            "addressType": "Home",
            "fullAddress": `${this.state.FullName},${this.state.Address},${this.state.Locality},${this.state.PinCode},${this.state.Number}`,
            "city": this.state.City,
            "state": this.state.State,
        }
        if(!isValid) {
            obj.customerDetails(userData).then((response) => {
                console.log(response);
                this.setState({ openContent: true });
            }).catch(error => {
                console.log(error);
            });
        }
    }

    componentDidMount() {
        this.getCartItem();
    }

    getCartItem = () => {
        obj.getCartItem().then((response) => {
            console.log(response.data.result);
            this.setState({ book: response.data.result });
        }).catch(error => {
            console.log(error);
        })
    }

    sendCount = (count) => {
        this.setState({ cartCount: count });
    }

    orderPlaced = () => {
        let orderDetails = [];
        this.state.book.map((value) => {
            let arr = {
                "product_id": value.product_id._id,
                "product_name": value.product_id.bookName,
                "product_quantity": value.quantityToBuy,
                "product_price": value.product_id.price
            };
            orderDetails.push(arr);
        })
    
        let data = {
            orders: orderDetails,
        };
        console.log(data);       
        obj.orderItem(data).then((response) => {           
            console.log(response); 
        }).catch((error) => {
            console.log(error);
        })  
        this.state.book.map((value) => {
            this.removeItem(value._id);
        })  
    }

    removeItem = (id) => {
        console.log(typeof(id));
        obj.removeCartItem(id).then((response) => {
            console.log(response);
            this.getCartItem();
        }).catch((error) => {
            console.log(error);
        })
    }

    change = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    }
   
    render() {
        const cartDetails = this.state.book.map((value, index) => {
            return (
                <div className="main_cart">
                    <div>
                        <img className="img_book" src={Book} alt="" />
                    </div>
                    <div className="text_content">
                        <div className="bag_text">
                            <div className="cart_title">{value.product_id.bookName}</div>
                            <div className="cart_bookAuthor">by {value.product_id.author}</div>
                            <div className="price">Rs. {value.product_id.price}</div>
                        </div>
                        <div className="count_content">
                            <div className="minus" onClick={()=>this.decrease(value._id, value.quantityToBuy)}>-</div>
                            <div className="count">{value.quantityToBuy}</div>
                            <div className="plus" onClick={()=>this.increase(value._id, value.quantityToBuy)}>+</div>
                            <div className="remove" onClick={() => this.removeItem(value._id)}>Remove</div>
                        </div>
                    </div>
                </div>
            )
        });  
        
        const orderDetails = this.state.book.map((value, index) => {
            return (
                <div className="main_cart2">
                    <div>
                        <img className="img_book2" src={Book} alt="" />
                    </div>
                    <div className="text_content2">
                        <div className="bag_text">
                            <div className="cart_title">{value.product_id.bookName}</div>
                            <div className="cart_bookAuthor">by {value.product_id.author}</div>
                            <div className="price">Rs. {value.product_id.price}</div>
                        </div>
                    </div>
                </div>
            )
        }); 

        return (
            <div>
                <Header val={this.state.book.length}/>
                <div className="CartBag_frame">
                    <div className="cartBag_head">
                        <div className="head">My Cart ({this.state.book.length})</div>
                        <div className="cart_details">{cartDetails}</div>
                        <div className="btn_content1">
                        <Button variant="contained" className="btn_place1" onClick={this.handleClick1} >
                            Place Order
                        </Button>
                    </div>
                    </div>
                </div>

                {this.state.open ?

                    <div className="address_frame_details">
                        <div className="customer_dtl">
                            <div className="header_detail1">Customer Details</div>
                            <div className="dtl_btn">Edit</div>
                        </div>
                        <div className="custm_content_names fname_pno">
                            <div className="city">
                                <div>
                                    <TextField
                                        size="small"
                                        label="FullName"
                                        type="text"
                                        name="FullName"
                                        variant="outlined"
                                        error = {this.state.nameError}
                                        onChange = {e => this.change(e)}
                                        helperText = {this.state.nameError ? "Enter your Name" : ''} 
                                    />
                                </div>
                            </div>
                            <div className="state">
                                <div>
                                    <TextField
                                        size="small"
                                        label="Phone Number"
                                        type="text"
                                        name="Number"
                                        variant="outlined"
                                        error = {this.state.numberError}
                                        onChange = {e => this.change(e)}
                                        helperText = {this.state.numberError ? "Enter Mobile Number" : ''} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="custm_content_names">
                            <div className="InputFields">
                                <TextField
                                    size="small"
                                    label="Pin Code"
                                    type="text"
                                    name="PinCode"
                                    variant="outlined"
                                    error = {this.state.pinError}
                                    onChange = {e => this.change(e)}
                                    helperText = {this.state.pinError ? "Enter your Pincode" : ''}
                                />
                            </div>
                            <div className="InputFields">
                                <TextField
                                    size="small"
                                    label="Locality"
                                    type="text"
                                    name="Locality"
                                    variant="outlined"
                                    error = {this.state.locError}
                                    onChange = {e => this.change(e)}
                                    helperText = {this.state.locError ? "Enter your Locality" : ''} 
                                />
                            </div>
                        </div>
                        <div className="address_feild">
                            <TextField
                                label="Address"
                                type="text"
                                name="Address"
                                variant="outlined"
                                size="large"
                                fullWidth
                                error = {this.state.addError}
                                onChange = {e => this.change(e)}
                                helperText = {this.state.addError ? "Enter your Address" : ''} 
                            />
                        </div>
                        <div className="city_state">
                            <div className="city">
                                <div>
                                    <TextField
                                        size="small"
                                        label="City/Town"
                                        type="text"
                                        name="City"
                                        variant="outlined"
                                        error = {this.state.cityError}
                                        onChange = {e => this.change(e)}
                                        helperText = {this.state.cityError ? "Enter your City/Town" : ''} 
                                    />
                                </div>
                            </div>
                            <div className="state">
                                <div>
                                    <TextField
                                        size="small"
                                        label="State"
                                        type="text"
                                        name="State"
                                        variant="outlined"
                                        error = {this.state.stateError}
                                        onChange = {e => this.change(e)}
                                        helperText = {this.state.stateError ? "Enter your State" : ''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="header2">
                            <FormControl component="fieldset">
                                <FormLabel className="type" component="legend">Type</FormLabel>
                                <RadioGroup row aria_label="radio" name="row_radio_buttons_group">
                                    <FormControlLabel value="Home" control={<Radio />} label="Home" />
                                    <FormControlLabel value="Work" control={<Radio />} label="Work" />
                                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        {this.state.openContent ? null :
                            <div className="btn_content2">
                                <Button variant="contained" className="btn_place2" onClick={this.handleClick2}>
                                    Continue
                                </Button>
                            </div>
                        }
                    </div>
                    :
                    <div className="address_frame">
                        Address Details
                    </div>
                }

                {this.state.openContent ?

                    <div className="order_content">
                        <div className="header_detail2" >Order Summary</div>
                        {orderDetails}
                        <div className="btn_content1">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/orderplaced'}>
                                <Button variant="contained" className="btn_place1" onClick= {this.orderPlaced}>
                                    Checkout
                                </Button>
                            </Link>
                        </div>
                    </div>
                    :
                    <div className="order_frame" >
                        Order Summary
                    </div>
                }

                <Footer />
            </div>
        )
    }
}

export default Cart