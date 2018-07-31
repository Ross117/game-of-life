import React, { Component } from 'react';
import Square from './square';

const Row = (props) => {
    let rowArry = [];
    for (let i = 0; i < props.squareCount; i++){
        rowArry.push(
            <div key={i}>
                <Square/>
            </div>
        )
    }
    return (
    <div>
      {rowArry}
    </div>
    );
  
  //   define onclick event which updates board/square state?
  };
  
  export default Row;