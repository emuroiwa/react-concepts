import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'Hello'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            msg:'Goodbye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.msg}</div>
                <button onClick={this.handleClick}>click</button>  
            </div>
        )
    }
}

export default EventBind
