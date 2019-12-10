import React, {Component} from "react";


class HomeOneColumn extends Component {
    render() {
        return (
            <div className="column flex">
                <div className="column__number">{this.props.number}</div>
                <div className="column__title">{this.props.title}</div>
                <div className="column__description">{this.props.body}</div>
            </div>
        )
    }
};

export default HomeOneColumn;