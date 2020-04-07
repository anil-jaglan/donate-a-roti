/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from '@material-ui/core/Avatar';

// @material-ui/icons
import { Email } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="/about" className={classes.navLink + " " + classes.navLinkActive} color="transparent" >About</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/about" className={classes.navLink + " " + classes.navLinkActive} color="transparent" >Request For Food</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/about" className={classes.navLink + " " + classes.navLinkActive} color="transparent" >Contact Us</Button>
      </ListItem>
      {!props.authenticated &&
        <ListItem className={classes.listItem}>
          <Button
            href="/login" className={classes.registerNavLink} onClick={e => preventDefault()} color="rose" round
          > Donate Food </Button>
        </ListItem>
      }
      {props.authenticated && (
        <React.Fragment>
          <ListItem className={classes.listItem}>
            <Button
              justIcon
              round
              href="/notifications"
              color="rose"
            >
              <Email className={classes.icons} />
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              left
              caret={false}
              hoverColor="rose"
              dropdownHeader={'Welcome ' + props.currentUser.name}
              buttonText={<Avatar src={props.currentUser.imageUrl} alt={props.currentUser.name}>{props.currentUser.name && props.currentUser.name[0]}</Avatar>}
              buttonProps={{
                className:
                  classes.navLink + " " + classes.imageDropdownButton,
                color: "transparent"
              }}
              dropdownList={[
                <a href="/profile" className={classes.link}>Profile</a>,
                <a href="/settings" className={classes.link}>Settings</a>,
                <a href="#logout" className={classes.link} onClick={props.onLogout} >Logout</a>
              ]}
            />
          </ListItem>
        </React.Fragment>
      )
      }
    </List>
  );
}
