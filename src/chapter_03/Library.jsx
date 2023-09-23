import React from "react";
import Book from "./Book";

function Libaray(props){
    return (
        <div>
            <Book name = "first met python" numOfPage = {300} />
            <Book name = "first met AWS" numOfPage = {400} />
            <Book name = "first met React" numOfPage = {500} />
        </div>
    );
}

export default Libaray;