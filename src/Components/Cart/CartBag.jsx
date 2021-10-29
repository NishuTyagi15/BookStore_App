import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './CartBag.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

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

    handleClick = () => {
        this.setState({ open: true });
    }
   
    render() {
        return (
            <div>
                <Header  info={this.info} displayBook ={this.props.displayBook}/>
                <div className="CartBag-frame">
                    <div className="cartBag-content">
                        <div >My Cart</div>
                        <div className="btn-content">
                            <Button variant="contained" className="btn-place"  onClick={this.handleClick} >
                                Place Order
                            </Button>
                        </div>
                    </div>
              
            </div>
            {this.state.open ?
                        <div className="address-frame-details">
                            <div className="customer-dtl">
                                <div className="header-detail">Customer Details</div>
                                <div className="dtl-btn">Edit</div>
                            </div>
                            <div className="custm-content-names">

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
                            <div className="custm-content-names">
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
                            <div className="address-feild">
                                <TextField 
                                    label="Address"
                                    type="text"
                                    name="Address"
                                    variant="outlined"
                                    size="large"
                                    fullWidth
                                />
                            </div>
                            <div className="city-state">
                                <div className="city">
                                    <div>
                                        <TextField                                    
                                            size="small"
                                            label="City"
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
                            <div className="header">
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Type</FormLabel>
                                    <RadioGroup row aria-label="Home" name="row-radio-buttons-group">
                                        <FormControlLabel value="Work" control={<Radio />} label="Female" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        <FormControlLabel
                                            value="disabled"
                                            disabled
                                            control={<Radio />}
                                            label="other"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            {this.state.openContent ? null :
                                <div className="btn-content">
                                    <Button variant="contained" className="btn-place">
                                        Continue
                                    </Button>
                                </div>
                            }
                        </div>
                        :
                        <div className="address-frame">
                            Address Details
                        </div>
                    }

                    {this.state.openContent ?

                        <div className="order-content">
                            <div className="header-detail" >Order Summary</div>
                            {/* <>{this.state.book.map((value, index) => {
                                return (
                                    <div>
                                        <div className="main-cart">
                                            <div>
                                                <img className="img-book" src={Image} alt="lll" />
                                            </div>
                                            <div className="text-content">
                                                <div className="bag-text">
                                                    <div className="cart-title">{value.product_id.bookName}</div>
                                                    <div className="cart-bookAuthor">by {value.product_id.author}</div>
                                                    <div className="price">Rs.{value.product_id.price}</div>
                                                </div>
                                            </div>
                                        </div>
                                        {this.state.book.length - 1 == index ?
                                            <div className="btn-content">
                                                <Button variant="contained" className="btn-place" onClick={this.OrderPlaced} >
                                                    Checkout
                                                </Button>
                                                <Backdrop className={backdrop} open={this.state.openBackDrop} onClick={this.handleClose}>
                                                    <CircularProgress color="inherit" />
                                                </Backdrop>
                                            </div> : null}
                                    </div>
                                )
                            })
                            } </> */}
                        </div>
                        :
                        <div className="order-frame" >
                            Order Summary
                        </div>
                    }
                       
                <Footer/>
            </div>        
        )
    }
}

export default Cart