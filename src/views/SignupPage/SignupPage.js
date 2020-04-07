import React from "react";
import PropTypes from 'prop-types';

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

// @react-icons
// import { FaFacebook, FaGoogle } from "react-icons/fa";

import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from '../../constants';
import { Redirect } from 'react-router-dom'

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import SignupForm from "./SignupForm.js";

const useStyles = theme => ({
  ...styles
});

class SignupPage extends React.Component {

  constructor(props) {
    super(props);
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
                    <h4>Sign Up</h4>
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
                    &nbsp;&nbsp;Signup with Facebook</Button>
                    <Button color="google" href={GOOGLE_AUTH_URL}>
                      <i className={" fab fa-google"} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signup with Google</Button>
                  </div>
                  <SignupForm {...this.props} />
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SignupPage);
