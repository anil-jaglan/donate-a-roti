import React from "react";

// core components
import Stats from "components/Stats/Stats.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


export default function StatCards(props) {
    return (<GridContainer spacing={3}>
        <GridItem xs={12} sm={4} md={4}>
            <Stats title="Total Roti donated" counter={50000} duration={2.75} hint={5000} />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
            <Stats title="People feeded" counter={1500} duration={2.75} hint={320} />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
            <Stats title="Total Doners" counter={340} duration={2.75} hint={5} />
        </GridItem>
    </GridContainer>);
}