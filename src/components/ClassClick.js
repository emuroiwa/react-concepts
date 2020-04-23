import React, { Component } from 'react'

class ClassClick extends Component {
   clickk() {
      console.log('object')  
    }
    render() {
        return (
            <div>
                <button onClick={this.clickk}>hhhhh</button>
            </div>
        )
    }
}

export default ClassClick
