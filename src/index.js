import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//ReactDOM.render(<BrowserRouter><Movies/></BrowserRouter>, document.getElementById('root'));

//ReactDOM.render(<BrowserRouter><Property/></BrowserRouter>, document.getElementById('root'));

//ReactDOM.render(<BrowserRouter><PropertyDetails/></BrowserRouter>, document.getElementById('root'));

//ReactDOM.render(<BrowserRouter><ConfirmBooking/></BrowserRouter>, document.getElementById('root'));

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
