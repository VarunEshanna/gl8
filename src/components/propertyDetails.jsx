import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import { getProperty } from '../services/fakePropertyService';
import Property from './property';
import { Redirect } from 'react-router-dom'

class PropertyDetails extends Component {
    state = {
        prop : getProperty("2")
      };

    handleClick = (property) => {
        console.log(property);
        alert('Booking Confirmed for '+ property.title);
        this.props.history.push('/');
    };

    render() {
        const id = this.props.match.params.id;
        console.log(id);

        let prop1 = getProperty(id);
        console.log(prop1);

        return (
            <React.Fragment>
                <h1>Property Details</h1>
                <h2>{prop1.title}</h2>
                <p>{prop1.description}</p>
                <p>{prop1.rating}</p>
                <label for="start">Start date:</label>
                <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31"></input>
                <label for="start">End date:</label>
                <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31"></input>
                <p>{prop1.rentAmount}$ per night</p>
                <button onClick={() => this.handleClick(prop1)} className="btn btn-danger btn-sm">Book Room</button>
            </React.Fragment>
        )
    }
}
 
export default PropertyDetails;