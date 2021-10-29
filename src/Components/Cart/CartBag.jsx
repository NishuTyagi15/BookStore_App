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

const styles = (theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: 'black',
      },
});

export class Cart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            open: false,
            openContent: false,          
        }
    }

    handleClick1 = () => {
        this.setState({ open: true });
    }

    handleClick2 = () => {
        this.setState({ openContent: true });
    }
   
    render() {
        return (
            <div>
                <Header />
                <div className="CartBag_frame">
                    <div className="cartBag_head">
                        <div className="head">My Cart (2)</div>
                        <div className="btn_content1">
                            <Button variant="contained" className="btn_place1"  onClick={this.handleClick1} >
                                Place Order
                            </Button>
                        </div> 
                        <div className="main_cart">
                            <div>
                                <img className="img_book" src={Book} alt="" />
                            </div>
                            <div className="text_content">
                                <div className="bag_text">
                                    <div className="cart_title">Don't Make Me Think</div>
                                    <div className="cart_bookAuthor">by Steve Kurg</div>
                                    <div className="price">Rs. 1500</div>
                                </div>
                                <div className="count_content">
                                    <div className="minus">-</div>
                                    <div className="count">1</div>
                                    <div className="plus">+</div>
                                    <div className="remove">Remove</div>
                                </div>
                            </div>
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
                                />
                            </div>
                            <div className="InputFields">
                                <TextField
                                    size="small"
                                    label="Locality"
                                    type="text"
                                    name="Locality"
                                    variant="outlined"
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
                                    />
                                </div>
                            </div>
                            <div className="state">
                                <div>
                                    <TextField
                                        size="small"
                                        label="LandMark"
                                        type="text"
                                        name="State"
                                        variant="outlined"
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
                        <div className="main_cart2">
                            <div>
                                <img className="img_book2" src={Book} alt="" />
                            </div>
                            <div className="text_content2">
                                <div className="bag_text2">
                                    <div className="cart_title">Don't Make Me Think</div>
                                    <div className="cart_bookAuthor">by Steve Kurg</div>
                                    <div className="price">Rs. 1500</div>
                                </div>
                            </div>
                            <div className="btn_content3">
                                <Link style={{textDecoration:'none', color:'white'}} to={'/orderplaced'}>
                                    <Button variant="contained" className="btn_place3" >
                                        Checkout
                                    </Button>
                                </Link>
                            </div>
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