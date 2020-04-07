import React from "react";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import AccessTime from "@material-ui/icons/AccessTime";

import CountUp from 'react-countup';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/components/statsStyle.js";

const allStyles = {
    ...styles,
    textMuted: {
      color: "#6c757d"
    },
  };
const useStyles = makeStyles(allStyles);

export default function Stats(props) {
    
    const { title, counter, duration, hint } = props;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardBody>
                <h4>{title}</h4>
                <CountUp end={counter} duration={duration} separator=","/>
            </CardBody>
            {hint && <CardFooter className={classes.textMuted}><AccessTime />&nbsp;&nbsp;<CountUp end={hint} duration={duration} separator=","/>&nbsp;yesterday</CardFooter>}
        </Card>
    );
}

Stats.propTypes = {
    title: PropTypes.string,
    counter: PropTypes.number,
    duration: PropTypes.number
}
