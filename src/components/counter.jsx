import React, { Component } from 'react';

class Counter extends Component {

    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement(){
        this.setState({count : this.state.count+ 1});
    }



    state = { 
        count : 1,
        tags : ['tag1','tag2']
     }
    
    render() { 
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button onClick={this.handleIncrement}>Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
            );
    }



    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count; 
    }
}
 
export default Counter;