import React, { Component } from "react";
import Input from "./Input";

class InputB extends Component {
  constructor(props) {
    super(props);
    this.componentRef = null;
    this.setInputRef = (e) => {
      this.componentRef = e;
    };
  }
  clickHandler = () => {
    if (this.componentRef) {
      this.componentRef.focusElement();
    }
  };
  render() {
    return (
      <div>
        <Input ref={this.setInputRef} />
        <button onClick={this.clickHandler}> Focus Input </button>
      </div>
    );
  }
}

export default InputB;
