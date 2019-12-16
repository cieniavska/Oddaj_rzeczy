import React from "react";


function HomeOneColumn(props) {
        return (
            <div className="column flex">
                <div className="column__number">{props.number}</div>
                <div className="column__title">{props.title}</div>
                <div className="column__description">{props.body}</div>
            </div>
        )
}

export default HomeOneColumn;