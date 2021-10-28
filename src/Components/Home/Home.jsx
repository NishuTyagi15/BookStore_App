import React, { Component } from 'react'
import Header from '../Header/Header';
import BooksDisplay from '../BooksDisplay/BooksDisplay';
import Footer from '../Footer/Footer';
import UserServices from '../../Services/UserService';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


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
                <div className="pagination">
                    <Stack spacing={2}>
                        <Pagination count={18} shape="rounded" />
                    </Stack>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home
