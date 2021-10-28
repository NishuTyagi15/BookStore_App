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

    displayBook = () => {
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

    componentDidMount() {
        this.displayBook();
    }

    render() {
        return (
            <div>
                <Header/>
                <BooksDisplay bookarr = {this.state.bookarr} displayBook={this.displayBook}/>
                <div className="pagination">
                    <Stack spacing={2}>
                        <Pagination count={10} shape="rounded" />
                    </Stack>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home
