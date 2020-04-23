import React from 'react'

function clickHandler() {
    console.log('object')
}
function FxnClick() {
    return (
        <div>
           <button onClick={clickHandler}>Click</button> 
        </div>
    )
}

export default FxnClick
