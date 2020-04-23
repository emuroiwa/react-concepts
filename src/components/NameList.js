import React from 'react'

function NameList() {
    const Names = ['ernest','test','test1','test2'];
    const listItems = Names.map((Name) =>
    <li>{Name}</li>
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
