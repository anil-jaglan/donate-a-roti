import React from "react";
import Alert from 'react-s-alert';

import { Route, Switch, Redirect } from "react-router-dom";

// pages
import DashBoard from "views/Dashboard/Dashboard.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

import OAuth2RedirectHandler from './user/oauth2/OAuth2RedirectHandler';
import { getCurrentUser } from './utils/APIUtils';
import { ACCESS_TOKEN } from './constants';
import ProtectedRoute from './common/ProtectedRoute';
import LoadingIndicator from './common/LoadingIndicator';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            authenticated: false,
            currentUser: null,
            loading: false
        }

        this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    loadCurrentlyLoggedInUser() {
        this.setState({
            loading: true
        });

        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    authenticated: true,
                    loading: false
                });
            }).catch(error => {
                this.setState({
                    loading: false
                });
            });
    }

    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        this.setState({
            authenticated: false,
            currentUser: null
        });
        Alert.success("You're safely logged out!");
    }

    componentDidMount() {
        this.loadCurrentlyLoggedInUser();
    }

    render() {
        if(this.state.loading) {            
            return <LoadingIndicator />;
        }
        return (
            <div className="App">
                <div className="Almighty-Router">
                    <Header
                        brand="Donate a Roti"
                        rightLinks={<HeaderLinks authenticated={this.state.authenticated} currentUser={this.state.currentUser} onLogout={this.handleLogout} />}
                        fixed

                    />
                    <Route exact path="/" render={() => <Redirect to="/" />} />
                    <Switch>
                        <Route exact path="/" component={DashBoard} ></Route>
                        <ProtectedRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                            component={ProfilePage}></ProtectedRoute>
                        <Route path="/login"
                            render={(props) => <LoginPage authenticated={this.state.authenticated} {...props} />}></Route>
                        <Route path="/signup"
                            render={(props) => <SignupPage authenticated={this.state.authenticated} {...props} />}></Route>
                        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
                        <Redirect from="*" to="/" />
                    </Switch>
                    <Footer />
                </div>
                <Alert stack={{ limit: 3 }}
                    timeout={3000}
                    position='top-right' effect='slide' offset={65} />
            </div>
        );
    }
}

export default App;