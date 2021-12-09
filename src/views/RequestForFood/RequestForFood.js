import React from "react";

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";


const useStyles = theme => ({
    ...styles
});
class RequestForFood extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            website: '',
            regstatus: '',
            address: '',
            city: '',
            pincode: '',
            cfullname: '',
            cmobile: '',
            cemail: '',
            orgTypes: [
                { key: "1", value: "Government supported entity (registered)" },
                { key: "2", value: "Non-government charitable institution (registered)" },
                { key: "3", value: "Individual-led charitable group (unregistered)" },
                { key: "4", value: "Unorganized space (unregistered)" },
                { key: "5", value: "Others" }
            ]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.main}>
                    <GridContainer direction="row" justify="center" alignItems="center">
                        <GridItem xs={12} sm={8} md={8}>
                            <h2>Get support</h2>
                            <h4>If you are in need of food support, reach out to us if you’re an NGO, private organisation or educational institute.</h4>
                        </GridItem>
                        <GridItem xs={12} sm={8} md={8}>
                            <Card>
                                <form className={classes.form} onSubmit={this.handleSubmit}>
                                    <CardBody>
                                        <h3>Request Food Support</h3>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <CustomInput
                                                    labelText="Registered Company Name *"
                                                    id="name"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        name: "name",
                                                        type: "text",
                                                        required: true,
                                                        onChange: this.handleInputChange,
                                                        error: this.state.name === ""
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Website Link"
                                                    id="website"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        name: "website",
                                                        type: "text"
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomSelect
                                                    labelText="Registration Status *"
                                                    id="regstatus"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        name: "regstatus",
                                                        required: true,
                                                        value: this.state.regstatus,
                                                        onChange: this.handleInputChange,
                                                        error: this.state.regstatus === ""
                                                    }}
                                                    options={this.state.orgTypes}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <CustomInput
                                                    labelText="Address of the organisation *"
                                                    id="address"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        name: "address",
                                                        type: "text",
                                                        required: true,
                                                        onChange: this.handleInputChange,
                                                        error: this.state.address === ""
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="City *"
                                                    id="city"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        name: "city",
                                                        type: "text",
                                                        required: true,
                                                        onChange: this.handleInputChange,
                                                        error: this.state.city === ""
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Pincode *"
                                                    id="pincode"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        name: "pincode",
                                                        type: "number",
                                                        minLength: 6,
                                                        maxLength: 6,
                                                        required: true,
                                                        onChange: this.handleInputChange,
                                                        error: this.state.pincode === ""
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <h4>Primary contact person</h4>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <CustomInput
                                                    labelText="Full Name *"
                                                    id="cfullname"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        name: "cfullname",
                                                        type: "text",
                                                        required: true,
                                                        onChange: this.handleInputChange,
                                                        error: this.state.cfullname === ""
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Mobile Number *"
                                                    id="cmobile"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        name: "cmobile",
                                                        type: "number",
                                                        minLength: 10,
                                                        maxLength: 10,
                                                        required: true,
                                                        onChange: this.handleInputChange,
                                                        error: this.state.cmobile === ""
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Email *"
                                                    id="cemail"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        name: "cemail",
                                                        type: "email",
                                                        required: true,
                                                        onChange: this.handleInputChange,
                                                        error: this.state.cemail === ""
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer justify="flex-end">
                                            <Button color="rose" round size="lg" type="submit">Submit</Button>
                                        </GridContainer>
                                    </CardBody>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div >
        );
    }
}

export default withStyles(useStyles)(RequestForFood);
