import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomAvatar from "components/CustomAvatar/CustomAvatar.js";

import styles from "assets/jss/timeline/timelineStyle.js";


const useStyles = makeStyles(styles);

export default function TimelineElement(props) {
    const classes = useStyles(useStyles);
    const {data} = props;
    const feedClasses = classNames({
        [classes.feed]: true
    });

    return (
        <Card className={feedClasses} xs={6} sm={6}>
            <CardBody className={classes.feedArea}>
                <CustomAvatar name={data.user.name} avatar={data.user.avatar}/>
                <p className={classes.feedText}>{data.user.name} donated <b>{data.donations[0].quantity} {data.donations[0].type}</b> today in <b>{data.user.location}</b></p>                
            </CardBody>
        </Card>
    );
}

TimelineElement.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ])
}