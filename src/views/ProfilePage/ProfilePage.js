import React from "react";

import Alert from 'react-s-alert';
import { get, post } from 'utils/RestAPI.js';
import { getStates, getCities, getLocality } from 'service/LocationService.js';
import { USER_BASE_URL } from '../../constants';

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AccountBox from "@material-ui/icons/AccountBox";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";


const useStyles = theme => ({
    ...styles
});

const initialFormData = Object.freeze({
    userId: '1',
    id: '',
    houseNo: '',
    street: '',
    state: '',
    city: '',
    locality: '',
    pincode: '',
});

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: 1,
            name: 'Anil Jaglan',
            email: 'trust@god.com',
            formData: initialFormData,
            loading: false,
            editable: false,
            states: [],
            cities: [],
            localities: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.loadAddress = this.loadAddress.bind(this);
        this.makeEditable = this.makeEditable.bind(this);
    }

    makeEditable() {
        this.setState({ editable: !this.state.editable });
    }

    async loadAddress() {
        this.setState({
            loading: true
        });

        const [states, address] = await Promise.all([
            getStates(),
            get(USER_BASE_URL + '/address/' + this.state.userId),
        ]);
        this.setState({
            formData: address,
            loading: false,
            editable: false,
            states: states,
            cities: getCities(address.state),
            localities: getLocality(address.state, address.city)
        });
    }

    componentDidMount() {
        this.loadAddress();
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;
        const data = Object.assign({}, this.state.formData, { [inputName]: inputValue });
        this.setState({
            formData: data
        });
    }

    handleSelectChange(event) {
        const target = event.target;
        const data = Object.assign({}, this.state.formData, { [target.name]: target.value });
        
        switch (target.name) {
            case 'state':                
                this.setState({cities: getCities(target.value)});
                break;
            case 'city':
                this.setState({localities: getLocality(this.state.formData.state, target.value)});
                break;
            default:
                break;
        }
        this.setState({
            formData: data
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = Object.assign({}, this.state.formData);
        post(USER_BASE_URL + '/address', data)
            .then(response => {
                Alert.success('Address updated successfully!');
                this.setState({ editable: false, loading: false, formData: response });
            }).catch(error => {
                Alert.error((error && error.message) || 'Error while updating Address.');
                this.setState({ loading: false });
            });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.main}>
                    <GridContainer>
                        <GridItem xs={12} sm={8} md={8}>
                            <form className={classes.form} onSubmit={this.handleSubmit}>
                                <Card>
                                    {/* <CardAvatar src="" alt="" /> */}
                                    <CardHeader icon>
                                        <CardIcon color="rose">
                                            <AccountBox />
                                        </CardIcon>
                                    </CardHeader>
                                    <CardBody>
                                        <h3>Your profile</h3>
                                        <GridContainer>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Name"
                                                    id="name"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: true,
                                                        value: this.state.name,
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Email"
                                                    id="email"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: true,
                                                        value: this.state.email,
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="House No. / Floor"
                                                    id="houseNo"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: !this.state.editable,
                                                        name: "houseNo",
                                                        type: "text",
                                                        value: this.state.formData.houseNo,
                                                        onChange: this.handleInputChange,
                                                        required: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Street"
                                                    id="street"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: !this.state.editable,
                                                        name: "street",
                                                        type: "text",
                                                        value: this.state.formData.street,
                                                        onChange: this.handleInputChange,
                                                        required: true
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomSelect
                                                    labelText="State"
                                                    id="state"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: !this.state.editable,
                                                        name: "state",
                                                        required: true,
                                                        value: this.state.formData.state,
                                                        onChange: this.handleSelectChange
                                                    }}
                                                    options={this.state.states}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomSelect
                                                    labelText="City"
                                                    id="city"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: !this.state.editable,
                                                        name: "city",
                                                        required: true,
                                                        value: this.state.formData.city,
                                                        onChange: this.handleSelectChange
                                                    }}
                                                    options={this.state.cities}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={6} md={6}>
                                            <CustomSelect
                                                    labelText="Locality"
                                                    id="locality"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: !this.state.editable,
                                                        name: "locality",
                                                        required: true,
                                                        value: this.state.formData.locality,
                                                        onChange: this.handleSelectChange
                                                    }}
                                                    options={this.state.localities}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Pincode"
                                                    id="pincode"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: !this.state.editable,
                                                        name: "pincode",
                                                        type: "number",
                                                        minLength: 6,
                                                        maxLength: 6,
                                                        value: this.state.formData.pincode,
                                                        onChange: this.handleInputChange,
                                                        required: true
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer justify="flex-end">
                                            {this.state.editable ?
                                                (
                                                    <div>
                                                        <Button color="info" round size="lg" onClick={this.makeEditable}>Cancel</Button>
                                                        <Button color="rose" round size="lg" type="submit">Save</Button>
                                                    </div>
                                                ) :
                                                (<Button color="rose" round size="lg" onClick={this.makeEditable}>Edit</Button>)
                                            }
                                        </GridContainer>
                                    </CardBody>
                                </Card>
                            </form>
                        </GridItem>
                        <GridItem xs={12} sm={4} md={4}>
                            <Card>
                                <CardAvatar src="" alt="" />
                                <CardBody>
                                    <GridContainer>
                                        <GridItem xs={12} sm={6} md={6}></GridItem>
                                    </GridContainer>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div >
        );
    }
}

export default withStyles(useStyles)(ProfilePage);
