import React from "react";

function Book(props){
    return (
        <div>
            <h1>This books title is {props.name}.</h1>
            <h1>This book is {props.numOfPage}.</h1>
        </div>
    );
}

export default Book;