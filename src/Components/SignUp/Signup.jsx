import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../SignUp/Signup.scss';
import UserServices from '../../Services/UserService';
import { Snackbar, IconButton } from '@mui/material';

const obj = new UserServices();

class Signup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            fname: "",
            email: "",
            password: "",
            mobile: "",
            fnameError: false,
            emailError: false,
            passError: false,
            mobError: false,
            snackbaropen: false, 
            snackbarmsg: ""
        }
    }

    snackbarClose = (event) => {
        this.setState({snackbaropen: false});
    };

    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.fnameError = this.state.fname !=='' ? false : true;
        errors.emailError = this.state.email !=='' ? false : true;
        errors.passError = this.state.password !=='' ? false : true;
        errors.mobError = this.state.mobile !=='' ? false : true;

        this.setState({
            ...errors
        })
        return isError = errors.fnameError || errors.emailError || errors.passError || errors.mobError
    }

    signup = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
            let signupObj = {
                "fullName": this.state.fname,
                "email": this.state.email,
                "password": this.state.password,
                "phone": this.state.mobile,
            }
            console.log(signupObj);
            obj.registration(signupObj).then((response)=> {
                console.log(response);
                localStorage.setItem("token", response.data.id);
                this.setState({snackbaropen:true, snackbarmsg: "Registered Successfully!"})
            }).catch((error)=>{
                console.log(error);
                this.setState({snackbaropen:true, snackbarmsg: "Registration Failed!"})
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
        return (
            <div className="signup_main">
                <form className="signup">
                    <div className="signup_inputs">
                        <TextField
                            id="fullName"
                            type="text"
                            name="fname"
                            label="Full Name"
                            variant="outlined"
                            size="small"
                            error={this.state.fnameError}
                            onChange={e => this.change(e)}
                            helperText={this.state.fnameError ? "Enter Full Name" : ''}
                        />
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
                        <TextField
                            id="mobile"
                            type="test"
                            name="mobile"
                            label="Mobile Number"
                            variant="outlined"
                            size="small"
                            error={this.state.mobError}
                            onChange={e => this.change(e)}
                            helperText={this.state.mobError ? "Enter a valid Number" : ''}
                        />
                    </div>
                    <div className="button_main">
                        <Button className="button1" variant="contained" onClick={this.signup}>
                            Signup
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

export default Signup;