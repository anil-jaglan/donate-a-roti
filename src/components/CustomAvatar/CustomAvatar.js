import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Avatar from '@material-ui/core/Avatar';

const styles = {
    avatar: {
        display: "flex",
    },
};
const useStyles = makeStyles(styles);

export default function CustomAvatar(props) {
    
    const { avatar } = props;
    const classes = useStyles();    
    return (
        <Avatar src={avatar} className={classes.avatar} />
    );
}