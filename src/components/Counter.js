import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    increaseCount() {
        this.setState({
            count : this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                Counter{this.state.count}
                <button onClick={()=> this.increaseCount()}>increase</button>
            </div>
        )
    }
}

export default Counter
