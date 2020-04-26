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
    
    changeState = () => {
        this.setState({
            name:'Liam'
        })
    }
    static getDeriveStateFromProps(state,props) {
        console.log('LifeCycleA getDeriveStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }

    getSnapshotBeforeUpdate( prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null;
    }

    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <LifeCycleChildA />
                {/* changing state to test Updating lifecycle */}
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifeCycleA
