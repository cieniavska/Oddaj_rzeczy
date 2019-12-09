import React, {Component} from "react";


class HomeOneColumn extends Component {
    render() {
        return (
            <div>
                <div>{this.props.number}</div>
                <div>{this.props.title}</div>
                <div>{this.props.body}</div>
            </div>
        )
    }
};

export default HomeOneColumn;