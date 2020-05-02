import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    //refs by callback function,
    this.setCbRef = (e) => {
      this.cbRef = e;
    };
  }
  componentDidMount() {
    //check if the property value has be set by the callback from the the element
    if (this.cbRef) {
      this.cbRef.focus();
    }
    //this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  clickHandler = () => {
    console.log(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        {/* <input type='text' ref={this.inputRef} /> */}
        <input type='text' ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefDemo;
