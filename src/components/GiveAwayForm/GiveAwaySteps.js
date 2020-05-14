import React from "react";

function GiveAwaySteps(props) {
    return (
        <div className="giveAwaySteps-wrapper flex">
            <div name="giveAwaySteps flex" className="container">
                <div className="giveAwaySteps__firstBox">{props.children}</div>
            </div>
        </div>
    )
}

export default GiveAwaySteps;