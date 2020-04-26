import React from 'react'

function NameList() {
    const Names = ['ernest','test','test1','test2'];
    const listItems = Names.map((Name,index) =>
    <li key = {index}>{Name}</li>
  );
    return (
        <div>
            <ul>
                {listItems}
            </ul>
            
        </div>
    )
}

export default NameList
