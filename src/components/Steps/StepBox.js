import React from "react";

function StepBox(props) {
        return (
            <div className="steps__box flex">
                <div className="steps__box__icon"></div>
                <div className="steps__box__title">{props.title}</div>
                <div className="steps__box__line"></div>
                <div className="steps__box__description">{props.description}</div>
            </div>
        )
};

export default StepBox;