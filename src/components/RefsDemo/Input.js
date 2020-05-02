import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
    this.setInputRef = (e) => {
      this.inputRef = e;
    };
  }
  focusElement() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }
  render() {
    return (
      <div>
        <input type='text' ref={this.setInputRef} />
      </div>
    );
  }
}

export default Input;
