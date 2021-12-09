import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/material-kit-react/components/cardAvatarStyle.js";
const useStyles = makeStyles(styles);

export default function CardAvatar(props) {

    const classes = useStyles();
    const { src, alt } = props;    
    return (
        <div className={classes.cardAvatar}>
            <img src={src} alt={alt} className={classes.avatarImg}/>
        </div>
    );
}

CardAvatar.propTypes = {
    src: PropTypes.string    
  };