import React from "react";
import Alert from 'react-s-alert';
import PropTypes from 'prop-types';

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

// @react-icons
//import { FaFacebook, FaGoogle } from "react-icons/fa";

import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from '../../constants';
import { Redirect } from 'react-router-dom'

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import LoginForm from "./LoginForm.js";

const useStyles = theme => ({
  ...styles
});

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden",
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ cardAnimation: "" });
    }, 700);
    // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
    // Here we display the error and then remove the error query parameter from the location.
    if (this.props.location.state && this.props.location.state.error) {
      setTimeout(() => {
        Alert.error(this.props.location.state.error, {
          timeout: 5000
        });
        this.props.history.replace({
          pathname: this.props.location.pathname,
          state: {}
        });
      }, 100);
    }
  }

  render() {
    const { classes } = this.props;

    if (this.props.authenticated) {
      return <Redirect
        to={{
          pathname: "/home",
          state: { from: this.props.location }
        }} />;
    }
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            background: '#ffffff',
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.props.cardAnimaton]}>
                  <CardHeader color="rose" className={classes.cardHeader}>
                    <h4>Please Login to Donate</h4>
                    <div className={classes.socialLine}>
                      {/* <Button href={FACEBOOK_AUTH_URL} color="transparent" >
                        <FaFacebook /> Facebook
                      </Button>
                      <Button href={GOOGLE_AUTH_URL} color="transparent">
                        <FaGoogle /> Google
                      </Button> */}
                    </div>
                  </CardHeader>
                  <div className={classes.socialLine}>
                    <Button color="facebook" href={FACEBOOK_AUTH_URL}>
                      <i className={" fab fa-facebook-square"} />
                    &nbsp;&nbsp;Login with Facebook</Button>
                    <Button color="google" href={GOOGLE_AUTH_URL}>
                      <i className={" fab fa-google"} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login with Google</Button>
                  </div>
                  <LoginForm {...this.props} />
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(LoginPage);
