import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
    this.setInputRef = (e) => {
      this.inputRef = e;
    };
  }

  clickHandler() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }
  render() {
    return (
      <div>
        <FRInput ref={this.setInputRef} />
        <button onClick={this.clickHandler}> focus </button>
      </div>
    );
  }
}

export default FRParent;
