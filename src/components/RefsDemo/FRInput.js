import React from "react";

const FRInput = React.forwardRef(function FRInput(props, ref) {
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  );
});

export default FRInput;
