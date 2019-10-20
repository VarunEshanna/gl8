import React, { Component } from 'react';

class LoginForm extends Component {
    
    state = {
        account : {
            username : '',
            password : ''
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
                <h1>Login Page</h1>
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
                            <label htmlFor="password">Password</label>
                            <input 
                                name="password"
                                value={this.state.account.password} 
                                onChange = {this.handleChange}
                                style={{width: "500px"}} 
                                id="password" 
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
 
export default LoginForm;