import React from "react";

function GiveAwaySteps(props) {
    return (
        <div className="giveAwaySteps-wrapper">
            <div name="giveAwaySteps" className="container">
                <div className="giveAwaySteps__firstBox">{props.children}</div>
                <div className="giveAwaySteps__secondBox"></div>
            </div>
        </div>
    )
}

export default GiveAwaySteps;