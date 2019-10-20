import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import PropertyDetails from './components/propertyDetails';
import ConfirmBooking from './components/confirmBooking';
import Property from './components/property';
import NavBar from './components/navbar';
import LoginForm from './components/login';
import RegisterForm from './components/register';
import ConfirmUser from './components/ConfirmUser';

class App extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <NavBar/>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/confirmUser" component={ConfirmUser} />
            <Route path="/property/:id" component={PropertyDetails} />
            <Route path="/property" component={Property} />
            <Route path="/confirmBooking" component={ConfirmBooking} />
            <Route path="/" component={Property} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
