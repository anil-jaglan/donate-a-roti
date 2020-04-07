import React from "react";

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = theme => ({
    ...styles
});
class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.main}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={8}>                            
                            <GridContainer>
                                <GridItem xs={12}>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>

                        </GridItem>
                    </GridContainer>
                </div>
            </div >
        );
    }
}

export default withStyles(useStyles)(ProfilePage);
