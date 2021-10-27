import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../SignUp/Signup.scss';
import Button from '@material-ui/core/Button';

export default class Login extends Component {

    render() {
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
                        />
                        <TextField
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            size="small"
                        />
                        <div className="pwd_change">
                            <span className="forget">Forget Password?</span>
                        </div>
                    </div>
                    <div className="button_main">
                        <Button className="button1" variant="contained">
                            Login
                        </Button>
                    </div>

                    <span style={{ marginTop: '14px' }}>---------- OR ----------</span>
                    <div className="buttons">
                        <Button className="button" variant="contained" color="primary">
                            Facebook
                        </Button>
                        <Button className="button" variant="contained" color="red">
                            Google
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}