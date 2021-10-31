import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../SignUp/Signup.scss';
import Button from '@material-ui/core/Button';
import UserServices from '../../Services/UserService';
import { Snackbar, IconButton } from '@mui/material';
import { Redirect } from 'react-router-dom';

const obj = new UserServices();

export default class Login extends Component {

    
    constructor(props) {
        super(props)
    
        this.state = {
            email: "",
            password: "",
            emailError: false,
            passError: false,
            snackbaropen: false, 
            snackbarmsg: "",
            redirect: "",
        }
    }

    snackbarClose = (event) => {
        this.setState({snackbaropen: false});
    };

    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.emailError = this.state.email !=='' ? false : true;
        errors.passError = this.state.password !=='' ? false : true;

        this.setState({
            ...errors
        })
        return isError = errors.emailError || errors.passError
    }

    login = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
            let signinObj = {
                "email": this.state.email,
                "password": this.state.password,
            }
            console.log(signinObj);
            obj.login(signinObj).then((response)=> {
                console.log(response);
                localStorage.setItem("token", response.data.result.accessToken);
                this.setState({snackbaropen:true, snackbarmsg: "Login Successful!"})
                this.setState({ redirect: "/home" });
            }).catch((error)=>{
                console.log(error);
                this.setState({snackbaropen:true, snackbarmsg: "Login Failed!"})
            })
        }  else {
            this.setState({snackbaropen:true, snackbarmsg: "Please enter data!"})
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="signup_main">
                <form className="signup">
                    <div className="signup_inputs">
                        <TextField
                            id="email"
                            type="text"
                            name="email"
                            label="Email Id"
                            variant="outlined"
                            size="small"
                            error={this.state.emailError}
                            onChange={e => this.change(e)}
                            helperText={this.state.emailError ? "Enter Valid Email" : ''}
                        />
                        <TextField
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            size="small"
                            error={this.state.passError}
                            onChange={e => this.change(e)}
                            helperText={this.state.passError ? "Enter a password" : ''}
                        />
                        <div className="pwd_change">
                            <span className="forget">Forget Password?</span>
                        </div>
                    </div>
                    <div className="button_main">
                        <Button className="button1" variant="contained" onClick={this.login}>
                            Login
                        </Button>
                    </div>

                    <span className="or">---------- OR ----------</span>
                    <div className="buttons">
                        <div className="fb">
                            <Button className="button2" variant="contained" color="primary">
                                Facebook
                            </Button>
                        </div>
                        <Button className="button3" variant="contained" color="red">
                            Google
                        </Button>
                    </div>
                </form>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={3000}
                    onClose={this.snackbarClose}

                    message={<span id="message_id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                            X
                        </IconButton>
                    ]}
                />
            </div>
        );
    }
}