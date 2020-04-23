import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: false
        }
    }
    
    render() {

        let message
        if (this.state.isLoggedin) {
            message = <div>welcome me</div>
        } else {
            message = <div>welcome guest</div>
        }
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default UserGreeting
