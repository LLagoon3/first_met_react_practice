import React from "react";

function Clock(props){
    var today = new Date ();
    return (
        <div>
            <h1>Time : {today.toLocaleTimeString()}</h1>
        </div>
    );
    
}

export default Clock;