import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value 
        })
    }
    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.username);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                        type="text"  
                        value={this.state.username} 
                        onChange={this.handleUsernameChange}
                    />
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
}

export default Form
