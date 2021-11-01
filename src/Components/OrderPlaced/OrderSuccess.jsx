import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './OrderSuccess.scss';
import Success from '../../Assets/success.png';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class OrderSuccess extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="success_main">
                    <div className="success_img">
                        <img className="image1" src={Success} alt="Success" />
                    </div>
                    <div className="success_text">
                        hurray!!! your order is confirmed the order id is #755431 save the order id for further communication..
                    </div>
                    <div className="info_table">
                        <table>
                            <tr>
                                <th>Email us</th>
                                <th>Contact us</th>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <td>admin@bookstore.com</td>
                                <td>+91 8163475881</td>
                                <td>Vasundhara, Ghaziabad, Uttar Pradesh 201012</td>
                            </tr>
                        </table>
                    </div>
                    <div className="ctn_shopping">
                        <Link style={{textDecoration:'none', color:'white'}} to={'/home'}>
                            <Button className="shop_btn" fullWidth size="small" color="primary" variant="contained">
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default OrderSuccess;