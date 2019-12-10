import React, {Component} from "react";

class SectionTitle extends Component {
    render() {
        return (
            <div className="steps container flex">
                <span className="steps__title">{this.props.title}</span>
                <span className="steps__decoration"></span>
            </div>
        )
    }
}

export default SectionTitle;