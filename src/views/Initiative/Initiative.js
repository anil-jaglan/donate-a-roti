import React from "react";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

export default function Initiative(props) {
    return (
        <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
                <InfoArea
                    title="Help feeding poor"
                    description="We've initiated this campaign for feeding poor people on daily basis."
                    icon={FaHandHoldingHeart}
                    iconColor="rose"
                />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
                <InfoArea
                    title="Donate from your door step"
                    description="You can start donating food items directly from your home and our team will collect it from your doorstep."
                    icon={FaHome}
                    iconColor="success"
                />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
                <InfoArea
                    title="Track your donation"
                    description="We make sure the food, you donated, is feeded to the needy and the tracking is shown in real time."
                    icon={Timeline}
                    iconColor="primary"
                />
            </GridItem>
        </GridContainer>);
}