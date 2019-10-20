import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import PropertyDetails from './components/propertyDetails';
import ConfirmBooking from './components/confirmBooking';
import Property from './components/property';
import NavBar from './components/navbar';
import LoginForm from './components/login';
import RegisterForm from './components/register';
import ConfirmUser from './components/ConfirmUser';
import axios from 'axios';

class App extends Component {

  /*async componentDidMount(){
    const url = "http://search-glteam8searchdomain-tm4a3slbn4dvrfbhgy7e7eco4q.us-east-1.cloudsearch.amazonaws.com/2013-01-01/search?q=paris";

    const promise = axios.get(url , { 
      headers : {
        "Access-Control-Allow-Origin": "*"
      }});
    

    const resp = await promise;
    console.log(resp);
  }*/


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
