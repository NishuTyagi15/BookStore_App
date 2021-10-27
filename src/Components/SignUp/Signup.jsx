import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../SignUp/Signup.scss';

class Signup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            email: "",
            password: "",
            mobile: "",
            nameError: false,
            emailError: false,
            passError: false,
            mobError: false,
        }

    }

    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.nameError = this.state.name !=='' ? false : true;
        errors.emailError = this.state.email !=='' ? false : true;
        errors.passError = this.state.password !=='' ? false : true;
        errors.mobError = this.state.mobile !=='' ? false : true;

        this.setState({
            ...errors
        })
        return isError = errors.nameError || errors.emailError || errors.passError || errors.mobError
    }

    signup = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
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
                            name="fName"
                            label="Full Name"
                            variant="outlined"
                            size="small"
                            error={this.state.nameError}
                            onChange={e => this.change(e)}
                            helperText={this.state.nameError ? "Enter Full Name" : ''}
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
            </div>
        );
    }
}

export default Signup;