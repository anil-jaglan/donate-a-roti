import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Timeline from "views/Timeline/Timeline.js";

// core views
import Initiative from "views/Initiative/Initiative.js"
import StatCards from "views/StatCards/StatCards.js"
import StatsTable from "views/StatsTable/StatsTable.js";

import styles from "assets/jss/material-kit-react/views/dashboard.js";

const useStyles = makeStyles(styles);

export default function Dashboard(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>     
            <div className={classes.main}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={8}>
                        <Initiative />
                        <StatCards />
                        <GridContainer>
                            <GridItem xs={12}>
                                <StatsTable />
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Timeline />
                    </GridItem>
                </GridContainer>
            </div>          
        </div >
    );
}
