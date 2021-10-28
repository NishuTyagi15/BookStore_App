import React, { Component } from 'react'
import Header from '../Header/Header';
import BooksDisplay from '../BooksDisplay/BooksDisplay';
import Footer from '../Footer/Footer';
import UserServices from '../../Services/UserService';

const obj = new UserServices();

export class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bookarr: []
        }
    }

    componentDidMount() {
        this.booksDisplay();
    }

    booksDisplay = () => {
        obj.getAllbooks()
            .then((response) => {
                this.setState({
                    bookarr: response.data.result
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Header/>
                <BooksDisplay bookarr = {this.state.bookarr} booksDisplay={this.booksDisplay}/>
                <Footer/>
            </div>
        )
    }
}

export default Home
