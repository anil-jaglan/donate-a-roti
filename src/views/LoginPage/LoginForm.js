import React from "react";
import Alert from 'react-s-alert';

import { Link } from 'react-router-dom'

import { withStyles } from "@material-ui/core/styles";

import { ACCESS_TOKEN } from '../../constants';
import { login } from '../../utils/APIUtils';

import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = theme => ({
    ...styles
});

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                Alert.success("You're successfully logged in!");
                this.props.history.push("/");
            }).catch(error => {                
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.form} onSubmit={this.handleSubmit}>
                <h4 className={classes.divider}>Login with Email</h4>
                <CardBody>
                    <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            name: "email",
                            type: "email",
                            onChange: this.handleInputChange,
                            required: true,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }}
                    />
                    <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            name: "password",
                            type: "password",
                            onChange: this.handleInputChange,
                            required: true,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <LockOutlinedIcon className={classes.inputIconsColor} />
                                </InputAdornment>
                            ),
                            autoComplete: "off"
                        }}
                    />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                    <Button color="rose" size="lg" type="submit">
                        Login
                  </Button>
                </CardFooter>
                <CardFooter className={classes.cardFooter}>
                    <h4 className={classes.divider}>New user? <Link to="/signup">Sign up!</Link></h4>
                </CardFooter>
            </form>
        );
    }
}

export default withStyles(useStyles)(LoginForm);