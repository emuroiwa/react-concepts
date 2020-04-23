import React, {Component} from "react";

class Message extends Component {

    constructor() {
        super();
        this.state = {
            message : 'Welcome vistior',
            msg : 'hhhd'
        }
    }
    subscribe() {
        this.setState({
            message: 'Thanks',
            msg: 'www'
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <h2>{this.state.msg}</h2>
                <button onClick={() => this.subscribe()}>Subcribe</button>
            </div>
            )
    }
}

export default Message;