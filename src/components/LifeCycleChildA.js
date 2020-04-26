import React, { Component } from 'react'

export class LifeCycleChildA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"Ernest" 
        }   
        console.log('LifeCycleChildA constructor ')
    }
    
    static getDeriveStateFromProps(state,props) {
        console.log('LifeCycleChildA getDeriveStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleChildA componentDidMount')
    }
    render() {
        console.log('LifeCycleChildA render')
        return (
            <div>
                Test
            </div>
        )
    }
}

export default LifeCycleChildA
