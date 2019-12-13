import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class LoginRegisterBtns extends Component {

    render() {
        return (
                <div className="loginRegisterBtns flex">
                    <Link to={this.props.firstPath}> <button to={this.props.firstPath} className="loginRegisterBtns__first">{this.props.firstBtn}</button></Link>
                    <button to={this.props.secondPath} className="loginRegisterBtns__second">{this.props.secondBtn}</button>
                </div>
        )
    }

}
