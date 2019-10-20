import React, { Component } from 'react';

class RegisterForm extends Component {
    state = {
        account : {
            username : '',
            password : '',
            confirmpassword : '',
            email : ''
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
                <h1>Register Page</h1>
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
                        <div className="from-group">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input 
                                name="confirmpassword"
                                value={this.state.account.confirmpassword} 
                                onChange = {this.handleChange}
                                style={{width: "500px"}} 
                                id="confirmpassword" 
                                type="text" 
                                className="form-control"/>
                        </div>
                        <div className="from-group">
                            <label htmlFor="email">E mail</label>
                            <input 
                                name="email"
                                value={this.state.account.email} 
                                onChange = {this.handleChange}
                                style={{width: "500px"}} 
                                id="email" 
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
 
export default RegisterForm;