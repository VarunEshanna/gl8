import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import { getProperties } from './../services/fakePropertyService';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';

class Property extends Component {
    state = {
        property : getProperties()
      };


    render() { 
        const {length : propertyCount} = this.state.property;

        if(propertyCount === 0 )
            return <p>No Property</p>;

        
        return (
            <React.Fragment>
                <div>
                    <input type="text"></input>
                    <button className="btn btn-primary">Search</button>
                </div>  
                <p>Number of properties are {propertyCount}</p>
                <table className="table">
                    <thead>
                    <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>City</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.property.map (property => (
                            <tr key={property.id}>
                                <td>
                                    <Link to={`/property/${property.id}`}>{property.title}</Link>
                                </td>
                                <td>{property.description}</td>
                                <td>{property.city}</td>
                                <td>{property.rating}</td>
                                <td>{property.rentAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}
 
export default Property;