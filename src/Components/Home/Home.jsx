import React, { Component } from 'react'
import Header from '../Header/Header';
import BooksDisplay from '../BooksDisplay/BooksDisplay';
import Footer from '../Footer/Footer';
import UserServices from '../../Services/UserService';

const obj = new UserServices();

export class Home extends Component {

    render() {
        return (
            <div>
                <Header/>
                <BooksDisplay />
                <Footer/>
            </div>
        )
    }
}

export default Home
