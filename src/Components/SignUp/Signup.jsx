import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../SignUp/Signup.scss';

class Signup extends Component {
    
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
                        />
                        <TextField
                            id="email"
                            type="text"
                            name="email"
                            label="Email Id"
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            id="mobile"
                            type="test"
                            name="mobile"
                            label="Mobile Number"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div className="button_main">
                        <Button className="button1" variant="contained">
                            Signup
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;