import React, {Component} from "react";

class StepBox extends Component {
    render() {
        return (
            <div className="steps__box flex">
                <div className="steps__box__icon">{this.props.icon}</div>
                <div className="steps__box__title">{this.props.title}</div>
                <div className="steps__box__description">{this.props.description}</div>
            </div>
        )
    }
}

export default StepBox;