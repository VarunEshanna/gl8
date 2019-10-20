import React, { Component } from 'react';

class ConfirmUser extends Component {
    state = {
        account : {
            username : '',
            passCode : ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('Submitted');
        this.props.history.push('/');
    };

    handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account});
    };

    render() { 
        return (
            <div>
                <h1>Confirm User Page</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="from-group">
                            <label htmlFor="username">User Name</label>
                            <input 
                                name="username"
                                value={this.state.account.username} 
                                onChange = {this.handleChange}
                                style={{width: "500px"}} 
                                id="username" 
                                type="text" 
                                className="form-control"/>
                        </div>
                        <div className="from-group">
                            <label htmlFor="passCode">Pass Code</label>
                            <input 
                                name="passCode"
                                value={this.state.account.passCode} 
                                onChange = {this.handleChange}
                                style={{width: "500px"}} 
                                id="passCode" 
                                type="text" 
                                className="form-control"/>
                        </div>
                        <br/>
                        <button className="btn btn-primary">Submit</button>
                    </form>
            </div>
        );
    }
}
 
export default ConfirmUser;