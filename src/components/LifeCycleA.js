import React, { Component } from 'react'
import LifeCycleChildA from './LifeCycleChildA'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"Ernest" 
        }   
        console.log('LifeCycleA constructor ')
    }
    
    static getDeriveStateFromProps(state,props) {
        console.log('LifeCycleA getDeriveStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <LifeCycleChildA />
            </div>
        )
    }
}

export default LifeCycleA
