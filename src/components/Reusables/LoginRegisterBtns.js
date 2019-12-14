import React from 'react';
import { Link } from 'react-router-dom';

function LoginRegisterBtns() {
        return (
                <div className="loginRegisterBtns flex">
                    <Link to={this.props.firstPath}> <button to={this.props.firstPath} className="loginRegisterBtns__first">{this.props.firstBtn}</button></Link>
                    <button to={this.props.secondPath} className="loginRegisterBtns__second">{this.props.secondBtn}</button>
                </div>
        )
};

export default LoginRegisterBtns;
