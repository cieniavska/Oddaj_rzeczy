import React from "react";

function ImportantMsg(props) {
    return (
        <div className="importantMsg-wrapper">
            <div name="importantMsg" className="container">
                <div className="importantMsg__title">{props.title}</div>
                <div className="importantMsg__text">{props.text}</div>
            </div>
        </div>
    )
}

export default ImportantMsg;